// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Shared/Layout";
import Signup from "./authorization/Signup";
import Signin from "./authorization/Signin";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";
import ForgotPassword from "./authorization/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
        <Routes>
          <Route element={<Protected />}>
            <Route element={<Layout><Dashboard /></Layout>} path="/dashboard" exact />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
