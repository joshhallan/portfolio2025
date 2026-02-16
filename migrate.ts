import * as admin from "firebase-admin";
import * as fs from "fs";
import path from "path";
import * as serviceAccount from "./serviceAccountKey.json";

// Initialize Firebase Admin with your Service Account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();

// Define the structure of our migration tasks
interface MigrationTask {
  file: string;
  collection: string;
}

const dataToImport: MigrationTask[] = [
  { file: "./temp_data/skills.json", collection: "skills" },
  { file: "./temp_data/experience.json", collection: "experience" },
  { file: "./temp_data/projects.json", collection: "projects" },
  { file: "./temp_data/qualifications.json", collection: "qualifications" },
];

/**
 * Technical Lead Note: Firestore batches have a 500-operation limit.
 * This function chunks the data to ensure we never hit that ceiling.
 */
async function uploadData() {
  const BATCH_LIMIT = 500;

  for (const item of dataToImport) {
    const filePath = path.resolve(__dirname, item.file);

    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${item.file}`);
      continue;
    }

    // Explicitly type the parsed JSON as an array of DocumentData to fix the 'any' error
    const dataArray = JSON.parse(fs.readFileSync(filePath, "utf8")) as admin.firestore.DocumentData[];
    
    console.log(`🚀 Preparing ${dataArray.length} items for the '${item.collection}' collection...`);

    // Loop through the data in chunks of 500
    for (let i = 0; i < dataArray.length; i += BATCH_LIMIT) {
      const batch = db.batch();
      const chunk = dataArray.slice(i, i + BATCH_LIMIT);

      chunk.forEach((docData) => {
        // Create a new document reference with an auto-generated ID
        const docRef = db.collection(item.collection).doc();
        batch.set(docRef, docData);
      });

      try {
        await batch.commit();
        const progress = Math.min(i + BATCH_LIMIT, dataArray.length);
        console.log(`  📦 Progress: ${progress}/${dataArray.length} committed to '${item.collection}'`);
      } catch (error) {
        console.error(`  ❌ Error committing batch for ${item.collection}:`, error);
        throw error; // Stop migration if a batch fails
      }
    }

    console.log(`✅ ${item.collection} upload complete!\n`);
  }
}

// Execute the migration
console.log("🛠️ Starting Firestore Migration...");
uploadData()
  .then(() => {
    console.log("🏁 All data sets migrated successfully.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("🚨 Migration failed:", err);
    process.exit(1);
  });