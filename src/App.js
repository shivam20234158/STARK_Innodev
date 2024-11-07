import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import LoginSignup from './components/LoginSignup';
import Complaint from './components/Complaint';
import React from "react";

function App() {
  return (
    <Router>
      <Header />
      
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginSignup" element={<LoginSignup />} />
        <Route path="/complaint" element={<Complaint />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
