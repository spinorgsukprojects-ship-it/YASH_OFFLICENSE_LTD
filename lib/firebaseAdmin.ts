import { cert, getApps, initializeApp, type App, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getCredential() {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (serviceAccount) {
    return cert(JSON.parse(serviceAccount));
  }

  return applicationDefault();
}

export function getFirebaseAdminApp(): App {
  const existingApp = getApps()[0];
  if (existingApp) return existingApp;

  return initializeApp({
    credential: getCredential(),
    projectId: process.env.FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT || "yash-offlicense-ltd-0721"
  });
}

export function getDb() {
  return getFirestore(getFirebaseAdminApp());
}
