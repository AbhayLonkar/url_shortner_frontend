import React from 'react';
import Navbar from './components/Navbar';
import UrlForm from './components/UrlForm';
import LoginForm from './components/LoginForm';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-blue-100">
      <Navbar />
      <AuthPage />
    </div>
  );
};

export default App;
