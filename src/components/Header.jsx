import React from 'react';

const Header = () => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold font-inter text-text">Алексей Федоров</h1>
      <p className="text-lg text-gray-600">Стратегический консультант в сфере Web3, AI и DeFi</p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Web3</span>
        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AI</span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">DeFi</span>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Product</span>
      </div>
    </header>
  );
};

export default Header; 