import React from 'react';
import { Play, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Level Up Your
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Gaming Experience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            Join millions of gamers worldwide in the ultimate gaming platform. 
            Discover new games, compete in tournaments, and connect with your gaming community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Play className="w-5 h-5 group-hover:animate-pulse" />
              <span>Start Playing</span>
            </button>
            <button className="border-2 border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-lg text-white font-bold text-lg hover:bg-gray-800 transition-all duration-200">
              Watch Trailer
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-200">
                <span className="counter" data-target="10">10</span>M+
              </div>
              <p className="text-gray-400 text-sm md:text-base">Active Players</p>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-200">
                <span className="counter" data-target="5000">5000</span>+
              </div>
              <p className="text-gray-400 text-sm md:text-base">Games Available</p>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-200">
                <span className="counter" data-target="24">24</span>/7
              </div>
              <p className="text-gray-400 text-sm md:text-base">Live Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;