import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'Обо мне' },
    { id: 'career', label: 'Карьера' },
    { id: 'skills', label: 'Навыки' },
    { id: 'technologies', label: 'Технологии' },
    { id: 'expertise', label: 'Техническая экспертиза' },
  ];

  return (
    <div className="flex overflow-x-auto bg-gray-100 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === tab.id
              ? 'bg-white shadow-sm rounded-t-lg text-primary'
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation; 