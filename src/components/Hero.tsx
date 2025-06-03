
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-emerald-900/20 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewbox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234CAF50" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center relative">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-emerald-400 via-purple-400 to-emerald-400 bg-clip-text font-rubik tracking-wider transform hover:scale-110 transition-all duration-500 cursor-default stretch-text">
            CHILL TIME
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-4 font-rubik tracking-wide">
            Лучший сервер для спокойной игры
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
            <div className="text-3xl font-bold text-emerald-400">Online: 247</div>
            <div className="text-gray-400">игроков</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400">Version: 1.20.4</div>
            <div className="text-gray-400">сервера</div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-2xl text-yellow-400 font-bold mb-4 animate-pulse">
            🎮 IP: play.chilltime.ru
          </p>
          <p className="text-gray-300 text-lg">
            Копируй IP и заходи играть!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
