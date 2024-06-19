import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Shared/Layout";
import Signup from "./authorization/Signup";
import Signin from "./authorization/Signin";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";
import ForgotPassword from "./authorization/ForgotPassword";
import Blogs from "./Shared/Blogs";
import Profile from "./Shared/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          element={
            <Layout>
              <Protected />
            </Layout>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
