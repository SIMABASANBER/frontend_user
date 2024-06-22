import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Start from "./pages/Start";
import Result from "./pages/Result";
import Questions from "./pages/questions";
import { ConfigProvider } from "antd";
const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#323232",
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/start" element={<Start />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
