'use client';
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <div className="text-2xl font-bold">Logo</div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-600">Курсы</a>
          <a href="#" className="hover:text-gray-600">Продукты</a>
          <a href="#" className="hover:text-gray-600">О нас</a>
        </nav>
        
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-gray-600">Для компаний</a>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Зарегистрироваться
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Positive technologies</h2>
          <p className="text-xl mb-8">
            Освойте сферу информационной безопасности прямо сейчас
          </p>
          <p className="text-gray-600 mb-10">
            Получайте знания, обучайте свою команду или оттачивайте навыки кибербезопасности в виртуальных машинах, которые мы подготовили, специально для вас.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition font-medium">
            Пройти пробное тестирование
          </button>
        </div>
      </main>
    </div>
  );
}