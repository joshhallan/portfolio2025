"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/firebase";

export default function Analytics() {
  useEffect(() => {
    initAnalytics()
      .then((analytics) => {
        if (analytics) console.log("Firebase Analytics initialized.");
      })
      .catch((err) => console.error("Firebase Analytics failed:", err));
  }, []);

  return null;
}
