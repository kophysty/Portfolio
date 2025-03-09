import React, { useState } from 'react';

const Career = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  
  const projects = [
    {
      id: 'upas',
      title: 'UPAS',
      period: '2024 - наст. время',
      description: 'Репутационный стандарт для децентрализованных приложений',
      details: 'UPAS - это универсальный стандарт репутации для Web3 экосистемы, позволяющий пользователям переносить свою репутацию между различными dApps.',
      technologies: ['Solidity', 'React', 'TypeScript', 'IPFS'],
      color: 'blue',
      type: 'Web3'
    },
    {
      id: 'relinkd',
      title: '{r}elinkd',
      period: '2021 - наст. время',
      description: 'Digital identity dapp и протокол репутации',
      details: 'Децентрализованное приложение для управления цифровой идентичностью и репутацией в Web3 пространстве.',
      technologies: ['Ethereum', 'React', 'Node.js', 'GraphQL'],
      color: 'purple',
      type: 'Web3/DeFi'
    },
    {
      id: 'spat',
      title: 'S-PAT Хакатон',
      period: '2023',
      description: 'Победа в EthGlobal Paris 2023 с репутационным приложением для Web3-аттестации',
      details: 'Разработка инновационного решения для верификации и аттестации пользователей в Web3 экосистеме, получившего признание на международном хакатоне.',
      technologies: ['Solidity', 'React', 'Ethers.js', 'IPFS'],
      color: 'green',
      type: 'Web3/Hackathon'
    },
    {
      id: 'pompo',
      title: 'POMPO the robot',
      period: '2022 - 2023',
      description: 'IoT проект и NFT коллекция',
      details: 'Создание интерактивного IoT робота с интеграцией в блокчейн через NFT коллекцию, объединяющую физический и цифровой миры.',
      technologies: ['IoT', 'NFT', 'Arduino', 'React'],
      color: 'orange',
      type: 'IoT/NFT'
    },
  ];
  
  const toggleProject = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };
  
  // Создаем временную шкалу с годами
  const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  return (
    <div>
      {/* Временная шкала */}
      <div className="flex justify-between mb-8 px-4">
        {years.map(year => (
          <div key={year} className="flex flex-col items-center">
            <div className="text-sm text-gray-500">{year}</div>
            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
          </div>
        ))}
      </div>
      
      {/* Проекты */}
      <div className="space-y-6">
        {projects.map(project => (
          <div 
            key={project.id}
            className={`border-l-4 pl-4 py-2 rounded-r-lg shadow-sm hover:shadow-md transition-shadow ${
              project.color === 'blue' ? 'border-blue-500' :
              project.color === 'purple' ? 'border-purple-500' :
              project.color === 'green' ? 'border-green-500' :
              'border-orange-500'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    project.type.includes('Web3') ? 'bg-blue-100 text-blue-800' :
                    project.type.includes('DeFi') ? 'bg-purple-100 text-purple-800' :
                    project.type.includes('IoT') ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {project.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{project.period}</p>
                <p className="mt-1">{project.description}</p>
              </div>
              <button 
                onClick={() => toggleProject(project.id)}
                className="text-sm text-primary hover:underline"
              >
                {expandedProject === project.id ? 'Свернуть детали' : 'Развернуть детали'}
              </button>
            </div>
            
            {expandedProject === project.id && (
              <div className="mt-4 pl-2 border-l border-gray-200">
                <p className="text-gray-700 mb-3">{project.details}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career; 