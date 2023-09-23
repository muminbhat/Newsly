import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/search' element={<SearchPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App