import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDchAl2DuYuWbWkEkqEaWnjtWLyVOFtsZ0",
  authDomain: "my-clothing-db-db7c4.firebaseapp.com",
  projectId: "my-clothing-db-db7c4",
  storageBucket: "my-clothing-db-db7c4.appspot.com",
  messagingSenderId: "933309271252",
  appId: "1:933309271252:web:632fc59432054adcc4bf41",
  measurementId: "G-ZVZ1NH6CVT",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

// const analytics = getAnalytics(app);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

