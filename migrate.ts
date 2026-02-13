const admin = require("firebase-admin");
const fs = require("fs");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const dataToImport = [
  { file: "./temp_data/skills.json", collection: "skills" },
  { file: "./temp_data/experience.json", collection: "experience" },
  { file: "./temp_data/projects.json", collection: "projects" },
  { file: "./temp_data/qualifications.json", collection: "qualifications" },
];

async function uploadData() {
  for (const item of dataToImport) {
    if (!fs.existsSync(item.file)) {
      console.error(`❌ File not found: ${item.file}`);
      continue;
    }

    const dataArray = JSON.parse(fs.readFileSync(item.file, "utf8"));
    console.log(`🚀 Uploading ${dataArray.length} items to ${item.collection}...`);

    const batch = db.batch();
    dataArray.forEach((docData) => {
      const docRef = db.collection(item.collection).doc();
      batch.set(docRef, docData);
    });

    await batch.commit();
    console.log(`✅ ${item.collection} upload complete!`);
  }
}

uploadData()
  .then(() => {
    console.log("🏁 All data migrated successfully.");
    process.exit();
  })
  .catch(console.error);