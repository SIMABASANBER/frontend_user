import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Start from "./pages/Start";
import Result from "./pages/Result";
import Questions from "./pages/questions";
import { ConfigProvider } from "antd";
import ProtectedRoute from "./protected-route";

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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/start"
            element={
              <ProtectedRoute>
                <Start />
              </ProtectedRoute>
            }
          />
          <Route
            path="/question"
            element={
              <ProtectedRoute>
                <Questions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <Result />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
