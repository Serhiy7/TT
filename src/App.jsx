// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import PropertyDetailPage from "./pages/PropertyDetailPage/PropertyDetailPage";

// Новые страницы:
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {/* Главная страница со списком объектов */}
            <Route path="/" element={<HomePage />} />
            {/* Страница детализации конкретного объекта */}
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            {/* Новые страницы */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />

            {/* Если хотите обработать «не найдено», можно добавить: */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
