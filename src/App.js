
import './App.css';
import React, { useEffect, useState } from "react";
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import Navbar from './pages/Navbar';
import Speedtest_anim from './pages/Speedtest_anim';
import Speedtest from './pages/Speedtest';
import QRCode from './pages/QRCode';
import WEBscaper from './pages/WEBscaper';
import WEBblocker from './pages/WEBblocker';
import PDFencp from './pages/PDFencp';
import YOUtubeMP3 from './pages/YOUtubeMP3';
import PytoEXE from './pages/PytoEXE';

function App() {



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speed_gif" element={<Speedtest_anim />} />
        <Route path="/speedtest" element={<Speedtest />} />
        <Route path="/qrcode" element={<QRCode />} />
        <Route path="/webscapper" element={<WEBscaper />} />
        <Route path="/webblocker" element={<WEBblocker />} />
        <Route path="/pdfencp" element={<PDFencp />} />
        <Route path="/youtubemp3" element={<YOUtubeMP3 />} />
        <Route path="/pytoexe" element={<PytoEXE />} />
      </Routes>
    </>
  );
}

export default App;
