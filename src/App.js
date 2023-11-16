import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { SignUp } from "./pages/SignUp/SignUp";
import ConnectionsPage from "./pages/ConnectionsPage/ConnectionsPage";
import Chat from "./components/Chat/Chat";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Navbar from "./components/Navbar/Navbar";
import SearchPage from "./pages/SearchPage/SearchPage";
import SchedulingPage from "./pages/SchedulingPage/SchedulingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LandingPage from "./pages/LandingPage/LandingPage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Dummy Data for People
const connectionsData = [
  {
    id: 1,
    name: "John Doe",
    profilePicture: "john.jpg",
    timePreferences: ["9:00am", "2:30pm", "4:00pm"],
  },
  {
    id: 2,
    name: "Alice Smith",
    profilePicture: "alice.jpg",
    timePreferences: ["10:00am", "3:30pm", "5:00pm"],
  },
  {
    id: 3,
    name: "Julie Tall",
    profilePicture: "julie.jpg",
    timePreferences: ["9:30am", "3:00pm", "4:30pm"],
  },
  {
    id: 5,
    name: "George Small",
    profilePicture: "george.jpg",
    timePreferences: ["7:30am", "5:00pm", "7:30pm"],
  },
];

function App() {
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in. Redirect to a different page or perform actions.
      } else {
        // User is signed out.
      }
    });

    return () => {
      // Unsubscribe from the listener when the component unmounts.
      unsubscribe();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/onboarding" element={<WelcomePage />} />
      <Route path="/onboarding-page-2" element={<OnboardingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/search" element={<SearchPage />} />
      <Route
        path="/connections"
        element={<ConnectionsPage people={connectionsData} />}
      />
      <Route path="/profile" element={<ProfilePage />} />
      <Route
        path="/chat/:id"
        element={<Chat people={connectionsData} db={db} />}
      />
      <Route
        path="/scheduling/:id"
        element={<SchedulingPage people={connectionsData} db={db} />}
      />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
