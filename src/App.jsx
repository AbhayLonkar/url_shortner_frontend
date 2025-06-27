import React from 'react';
import Navbar from './components/Navbar';
import UrlForm from './components/UrlForm';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-blue-100">
      <Navbar />
      <div className="flex-1 flex items-center justify-center w-full">
        <UrlForm />
      </div>
    </div>
  );
};

export default App;
