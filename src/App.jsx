//import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";

import UploadPage from "./pages/Uploadpage/UploadPage";
import VideoPlayerPage from "./pages/VideoPlayerPage";



const App = () => {


  return (
    <Router>
      <div className="mobile-layout">
        <Header />
        <Routes>
          <Route path="/" element={<VideoPlayerPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/video/:id" element={<VideoPlayerPage />} />
        </Routes>
      
      </div>
    </Router>
  );
};

export default App;
