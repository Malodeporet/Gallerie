import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar/Navbar';
import Acceuil from './components/Acceuil/Acceuil';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Acceuil/>} path='/' />
        <Route element={<Gallery/>} path='/gallerie' />
        <Route element={<Contact/>} path='/contact' />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
