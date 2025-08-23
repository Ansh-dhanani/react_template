import React from 'react';
import { Github, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-white font-bold text-xl">GameHub</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The ultimate gaming platform where millions of players connect, compete, and discover amazing games every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Games</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Action Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Strategy Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">RPG Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Racing Games</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Bug Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Feature Requests</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GameHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;