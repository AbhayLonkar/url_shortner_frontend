import React from 'react';
import Navbar from './components/Navbar';
import UrlForm from './components/UrlForm';
import LoginForm from './components/LoginForm';
import AuthPage from './pages/AuthPage';
import { Outlet } from '@tanstack/react-router';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-blue-100">
      <Navbar />
      <div className="flex-1 flex items-center justify-center w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
