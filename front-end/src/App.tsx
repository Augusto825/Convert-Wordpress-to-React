import React from "react";
import './tailwind.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/NavPages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/NavPages/AboutPage";
import ContactPage from "./pages/NavPages/ContactPage";
import PortfolioPage from "./pages/NavPages/PortfolioPage";
import OurWayPage from "./pages/NavPages/OurWayPage";


const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/דף הבית" element={<HomePage />} />
          <Route path="/אודותינו" element={<AboutPage />} />
          <Route path="/תיק עבודות" element={<PortfolioPage/>} />
          <Route path="/הדרך שלנו" element={<OurWayPage/>} />
          <Route path="/צרו קשר" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App;