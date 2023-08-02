import React from "react";
import ReactDOM from "react-dom";
import Login from "./login";
import Signup from "./signup";
import Splash from "./splash";
import Onboarding from "./onboarding";
import { Route, Routes } from 'react-router-dom';
import Chatbot from "./message";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/chatbot" element={<Chatbot />} />
        
      </Routes>
    </div>
  );
}
