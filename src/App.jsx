import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import PropertyPage from "./pages/PropertyPage";
import BookingPage from "./pages/BookingPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";
import OwnerPortalPage from "./pages/OwnerPortalPage";
import SaleListingsPage from "./pages/SaleListingsPage";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/property/:slug" element={<PropertyPage />} />
          <Route path="/booking/:slug" element={<BookingPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/owner" element={<OwnerPortalPage />} />
          <Route path="/owner-services" element={<OwnerPortalPage />} />
          <Route path="/for-sale" element={<SaleListingsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
