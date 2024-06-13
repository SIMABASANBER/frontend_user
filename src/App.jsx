import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Start from './pages/Start';
import Result from './pages/Result';
import Question from './pages/Question';
import { ConfigProvider } from 'antd';
const App = () => {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#323232',
      },
    }}
  >
    <Router>
      <Routes>
      <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/start" element={<Start />} />
        <Route path="/question/:id" element={<Question />}/>
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  </ConfigProvider>
  );
};

export default App;