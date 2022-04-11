import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCOQ-n-JhpFZ37mVl96RoHCtyocrQmipPw",
  authDomain: "web-scraper-11585.firebaseapp.com",
  projectId: "web-scraper-11585",
  storageBucket: "web-scraper-11585.appspot.com",
  messagingSenderId: "639777843713",
  appId: "1:639777843713:web:71286e0db7d307f2a36e00"
};

export const startFirebase = () => {
  initializeApp(firebaseConfig);
}


