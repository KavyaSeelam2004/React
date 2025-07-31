// src/App.jsx
import React from 'react';
import BmiCalculator from './components/BmiCalculator';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100 flex items-center justify-center p-4">
      <BmiCalculator />
    </div>
  );
};

export default App;
