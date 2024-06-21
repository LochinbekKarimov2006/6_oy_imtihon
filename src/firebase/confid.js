import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyALBqfNaLs0scsOBWDxci3Ev0lXN3mggaI",
  authDomain: "imtihon-f10a8.firebaseapp.com",
  projectId: "imtihon-f10a8",
  storageBucket: "imtihon-f10a8.appspot.com",
  messagingSenderId: "936173112265",
  appId: "1:936173112265:web:54d7a5788bbc15a6bcb618"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);