"use client";

import { useEffect } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export default function Analytics() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      isSupported().then((supported) => {
        if (supported) {
          try {
            const app =
              getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

            getAnalytics(app);
            console.log("Firebase Analytics initialized successfully.");
          } catch (err) {
            console.error("Firebase Analytics failed to init:", err);
          }
        }
      });
    }
  }, []);

  return null;
}
