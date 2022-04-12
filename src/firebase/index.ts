import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "",
  authDomain: "web-scraper-11585.firebaseapp.com",
  projectId: "web-scraper-11585",
  storageBucket: "web-scraper-11585.appspot.com",
  messagingSenderId: "",
  appId: ""
};

export const startFirebase = () => {
  initializeApp(firebaseConfig);
}


