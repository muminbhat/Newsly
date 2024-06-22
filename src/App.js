import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Maintenance from './pages/Maintenance';
import NoPage from './pages/404';
import NewsPost from './components/NewsPost';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage />} />
    <Route path="/news/:encodedUrl" element={<NewsPost />} />
    <Route path="*" element={<NoPage />} />
    <Route path="/maintenance" element={<Maintenance />} />

    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App