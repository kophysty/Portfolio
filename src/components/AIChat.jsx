import React, { useState } from 'react';

const AIChat = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: 'Привет! Я AI-ассистент Алексея. Что бы вы хотели узнать о его опыте и навыках?', 
      isUser: false 
    }
  ]);
  
  const predefinedQuestions = [
    { id: 'current', text: 'Над какими проектами вы сейчас работаете?' },
    { id: 'ai', text: 'Как вы применяете AI в своей работе?' },
    { id: 'web3', text: 'Что вас привлекает в Web3?' },
    { id: 'learning', text: 'Какие технологии вы сейчас изучаете?' },
    { id: 'future', text: 'Ваше видение будущего технологий?' },
    { id: 'advantage', text: 'В чем ваше конкурентное преимущество?' },
  ];
  
  const predefinedAnswers = {
    'current': 'В настоящее время я работаю над UPAS - репутационным стандартом для децентрализованных приложений, а также развиваю несколько AI-агентов для автоматизации исследований.',
    'ai': 'Я использую AI для автоматизации рутинных задач, анализа данных и создания персонализированных решений. Работаю с LangChain, Flowise и n8n для построения агентов.',
    'web3': 'Web3 привлекает меня возможностью создавать по-настоящему децентрализованные и устойчивые к цензуре системы, где пользователи контролируют свои данные и активы.',
    'learning': 'Сейчас углубляюсь в Retrieval-Augmented Generation (RAG), векторные базы данных и оптимизацию LLM для специфических задач.',
    'future': 'Я вижу будущее в конвергенции AI и Web3 технологий, создании автономных агентов и децентрализованных систем, которые будут работать на благо пользователей, а не корпораций.',
    'advantage': 'Мое конкурентное преимущество в сочетании глубокого понимания Web3 и AI с практическим опытом разработки и стратегическим мышлением. Я не только следую за трендами, но и создаю их.',
  };
  
  const handleQuestionClick = (questionId) => {
    const question = predefinedQuestions.find(q => q.id === questionId);
    
    // Добавляем вопрос пользователя
    setMessages(prev => [...prev, { id: Date.now(), text: question.text, isUser: true }]);
    
    // Имитируем задержку ответа
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: predefinedAnswers[questionId], 
        isUser: false 
      }]);
    }, 500);
  };

  return (
    <section className="mt-8 border rounded-lg p-4 bg-gray-50">
      <h2 className="text-2xl font-inter font-semibold mb-4">Задайте вопрос</h2>
      
      <div className="mb-4 max-h-60 overflow-y-auto space-y-3 p-2">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`p-3 rounded-lg max-w-[80%] ${
              message.isUser 
                ? 'bg-primary text-white ml-auto' 
                : 'bg-white border border-gray-200 mr-auto'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {predefinedQuestions.map(question => (
          <button
            key={question.id}
            onClick={() => handleQuestionClick(question.id)}
            className="text-left p-2 text-sm border rounded hover:bg-gray-100 transition-colors"
          >
            {question.text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AIChat; 