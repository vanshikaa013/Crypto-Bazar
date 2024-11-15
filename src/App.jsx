import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CoinDetailsPage from "./pages/CoinDetailsPage";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="coin/:id" element={<CoinDetailsPage />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

// API :" https://api.coingecko.com/api/v3/search/trending"

// API :  https://api.coingecko.com/api/v3/coins/${id}

// AUTH API : https://auth-backend-93eo.onrender.com/api/user/login
