import React from 'react';
import { MessageCircle, Trophy, Calendar, Zap } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with fellow gamers, participate in tournaments, and stay updated with the latest gaming news
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
            <p className="text-gray-400">Connect with gamers worldwide in real-time chat rooms</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Tournaments</h3>
            <p className="text-gray-400">Compete in daily tournaments and win amazing prizes</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Events</h3>
            <p className="text-gray-400">Join special gaming events and exclusive beta access</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Live Streams</h3>
            <p className="text-gray-400">Watch and stream gameplay with integrated tools</p>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with Gaming News
            </h3>
            <p className="text-gray-400">
              Get the latest updates, game releases, and exclusive offers delivered to your inbox
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3 text-center">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;