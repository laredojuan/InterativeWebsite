import "./App.css";
import Navbar from "../components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Services from "./pages/Services";
import Products from "./products/Games";
import SignUp from "./user/SignUp";
import LogIn from "./user/LogIn";
import Account from "./user/Account";
import Snake from "./products/snakegame/Snake";
import { AuthContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./user/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home to="/" />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/logIn" element={<LogIn />}></Route>
          <Route path="/snake" element={<Snake />}></Route>
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}
export default App;
