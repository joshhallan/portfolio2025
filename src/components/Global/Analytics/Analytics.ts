"use client";

import { useEffect } from "react";
import { initializeApp, getApps, getApp, FirebaseOptions } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

export default function Analytics() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

    if (!projectId) {
      console.warn(
        "Firebase: Project ID is missing. Analytics will not initialize.",
      );
      return;
    }

    const firebaseConfig: FirebaseOptions = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: projectId,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    };

    const initFirebase = async () => {
      const supported = await isSupported();
      if (supported) {
        try {
          const app =
            getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
          getAnalytics(app);
          console.log("Firebase Analytics initialized.");
        } catch (err) {
          console.error("Firebase Analytics failed to init:", err);
        }
      }
    };

    initFirebase();
  }, []);

  return null;
}
