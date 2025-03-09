import React from 'react';
import AIChat from './AIChat';

const AboutMe = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-inter font-semibold mb-4">Профессиональный профиль</h2>
        <p className="text-gray-700 leading-relaxed">
          Разработчик Web3-продуктов и технологический энтузиаст с глубоким пониманием блокчейн-индустрии,
          DeFi-механик и автоматизации рабочих процессов. Имеет опыт работы с APR, ликвидностью и своп-протоколами,
          а также анализом последних трендов в Web3 и AI. Специализируется на создании удобных пользовательских решений,
          таких как SaaS-приложения для управления подписками.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-inter font-semibold mb-4">Подход к работе</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Фокус на эффективности и минимизации ручного труда</li>
          <li>Глубокий анализ перед реализацией решений</li>
          <li>Внимание к деталям и ориентация на результат</li>
          <li>Интерес к новейшим технологиям и трендам</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-inter font-semibold mb-4">Контакты</h2>
        <div className="space-y-2">
          <p><span className="font-medium">LinkedIn:</span> <a href="https://linkedin.com/in/kophysty" className="text-primary hover:underline">kophysty</a></p>
          <p><span className="font-medium">GitHub:</span> <a href="https://github.com/kophysty" className="text-primary hover:underline">kophysty</a></p>
          <p><span className="font-medium">Twitter/X:</span> <a href="https://twitter.com/kophysty" className="text-primary hover:underline">kophysty</a></p>
          <p><span className="font-medium">Telegram:</span> <a href="https://t.me/fornodevs" className="text-primary hover:underline">fornodevs</a></p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-inter font-semibold mb-4">Публикации</h2>
        <p className="text-gray-600 italic">Список публикаций будет добавлен позже</p>
      </section>

      <AIChat />
    </div>
  );
};

export default AboutMe; 