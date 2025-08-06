import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Products from "./pages/Products.";
import Login from "./components/Login";
const App: React.FC = () => {
  // Helper function để bọc layout
  const withLayout = (component: React.ReactElement) => (
    <Layout>{component}</Layout>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={withLayout(<Home />)} />
        <Route path="/products" element={withLayout(<Products />)} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
