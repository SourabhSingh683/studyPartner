import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/Home";
import WhyChooseStudyGroup from "./components/WhyChooseStudyGroup";
import HowStudyGroupWorks from "./components/HowStudyGroupWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/ContactFooter";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute"; // Ensure this file is correctly implemented
import Login from "./components/Login";
import Signup from "./components/SignUp";
// import Dashboard from "./components/Dashboard"; // Import if needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        {/* Uncomment and use Dashboard if it exists */}
        {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
      </Routes>
      <HomePage />
      <WhyChooseStudyGroup />
      <HowStudyGroupWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
