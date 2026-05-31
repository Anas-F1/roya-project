import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// استيراد المكونات من ملفاتها المنفصلة
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import BlogList from "./components/BlogList";
import EconomicReport from "./components/EconomicReport";
import Footer from "./components/Footer";
import "./App.css";
import CirclePackingChart from "./components/CirclePackingChart";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/economic-report" element={<EconomicReport />} />
          <Route
            path="/blog/saudi-labor-market"
            element={<CirclePackingChart />}
          />
          <Route path="*" element={<HomeContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
