import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold mb-4 md:mb-0">Команды</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">✈️</span>
            <a href="#" className="hover:underline">Политика конфиденциальности</a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎥</span>
            <a href="#" className="hover:underline">Подписаться на сообшение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;