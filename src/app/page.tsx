'use client';
import React, { useEffect, useState } from "react";
import { loadContent } from "./utils/content";

export default function HomePage() {
  
    const [content, setContent] = useState<Record<string, any>>({});

    useEffect(() => {
        const fetchContent = async () => {
            const data = await loadContent();
            setContent(data);
        };
        fetchContent();
    }, []);

    if (!content.home) return (
        <div className="min-h-screen bg-white text-frost p-8 font-mono">
            <div className="animate-pulse">ЗАГРУЗКА СИСТЕМЫ...</div>
        </div>
    );

  
  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/main-background.png" // Укажите правильный путь к изображению
          alt="Background"
          className="w-full h-full object-cover opacity-20" 
        />
      </div>

      {/* Контент поверх фона */}
      <div className="relative z-10">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <svg className="w-20 h-20 mr-2 fill-current text-red-500" viewBox="0 0 49 49">
                <rect width="49" height="49" rx = "10"/>
              </svg>
              Positive <br/> technologies
            </h2>
            <p className="text-6xl font-bold mb-20">
              {content.home.title}
            </p>
            <p className="text-4xl mb-10">
              Получайте знания, обучайте свою команду или оттачивайте навыки кибербезопасности в виртуальных машинах, которые мы подготовили, специально для вас.
            </p>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-gray-800 transition font-medium">
              Пройти пробное тестирование
            </button>
          </div>
        </main>

        {/* Track Your Progress Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-6xl font-bold mb-6">Отслеживайте свой прогресс</h2>
          <p className="text-3xl mb-10">
            Благодаря матрице компетенции вы можете понимать в каких темах вы продвигаетесь, а над какими еще стоит поработать
          </p>
          <div className="mb-10 flex justify-end">
            <img src="/radar-chart.png" alt="Radar Chart" className="w-6/10 h-auto object-cover" />
          </div>
        </section>

        {/* Protection of Your Data Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Защита ваших данных</h2>
          <p className="text-gray-600 mb-10">
            На нашей платформе реализована регистрация через MetaMask, что повысила безопасность данных и удоство, так как авторизация будет осуществлена буквально в один клик
          </p>
          <p className="text-sm text-gray-400">Форма регистрации(картинка)</p>
        </section>

        {/* Smart Analysis and Personalization Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Умный анализ и персонализация</h2>
          <p className="text-gray-600 mb-10">
            Мы интерпреовали искусственный интеллект, чтобы подстраиваться под ваши увлечения и цели
          </p>
          <p className="text-sm text-gray-400">Форма рекомендаций(картинка)</p>
        </section>

        {/* Stages of Learning Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Этапы прохождения обучения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-200 text-black p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Теоретическая часть</h3>
              <p>Вы будете учить всю теорию пока не надоест и так далее</p>
            </div>
            <div className="bg-gray-200 text-black p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Практическая часть</h3>
              <p>Задачи, проверяющие полученные знания в реальных условиях</p>
            </div>
            <div className="bg-gray-200 text-black p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Сертификат об окончании</h3>
              <p>Вы получите выгоду квалифицированный специалист и готовы вступать в бой</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}