import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { cache } from "react";

// Using React 'cache' ensures that if you call this multiple times
// in one page request, it only hits Firestore once.
export const getSkills = cache(async () => {
  console.log("🔥 Fetching skills from Firestore...");
  const colRef = collection(db, "skills");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
});
