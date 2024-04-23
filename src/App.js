import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import HomePage from "./routes/HomePage/HomePage";
// import LoginPage from "./routes/LoginPage/LoginPage";
// import { SignUp } from "./routes/SignUp/SignUp";
import ConnectionsPage from "./routes/ConnectionsPage/ConnectionsPage";
// import Chat from "./components/ChatRoom/ChatRoom";
import WelcomePage from "./routes/WelcomePage/WelcomePage";
import OnboardingPage from "./routes/OnboardingPage/OnboardingPage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
// import Navbar from "./components/Navbar/Navbar";
import ConnectionsNext from "./routes/ConnectionsNext/ConnectionsNext";
import SearchPage from "./routes/SearchPage/SearchPage";
import SchedulingPage from "./routes/SchedulingPage/SchedulingPage";
import { Bookings } from "./routes/Bookings/Bookings";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage";
import LandingPage from "./routes/LandingPage/LandingPage";
import ChatPage from "./routes/ChatPage/ChatPage"
import ChatInbox from "./routes/ChatInbox/ChatInbox"
import { useState } from "react";
import connectionsData from "./data/connectionsData";


// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTDShSWIh1FCcfrOTjP6JCPkg0UlEpNyI",
  authDomain: "coffee-chat-a47df.firebaseapp.com",
  projectId: "coffee-chat-a47df",
  storageBucket: "coffee-chat-a47df.appspot.com",
  messagingSenderId: "433208987432",
  appId: "1:433208987432:web:130287fea3c4e8d8a18a1d",
  measurementId: "G-YJ6XZ3QFMH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);


function App() {
  const auth = getAuth();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  

  if (loading) {
    return null;
  }

  
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      {/* <Route path="/onboarding" element={<WelcomePage />} /> */}
      {/* <Route path="/onboarding-page-2" element={<OnboardingPage />} /> */}

      {/* {user ? (
        <> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/connections"
            element={<ConnectionsPage people={connectionsData} />}
          />
          <Route path="/connections-next" element={<ConnectionsNext />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/inbox" element={<ChatInbox />} />
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/SchedulingPage" element={<SchedulingPage/>}/>
          <Route
            path="/scheduling/:id"
            element={<SchedulingPage people={connectionsData} db={db} />}
          />
          {/* <Route
            path="/chat/:id"
            element={<Chat people={connectionsData} db={db} />}
          />
          
          
        {/* </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )} */}
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
