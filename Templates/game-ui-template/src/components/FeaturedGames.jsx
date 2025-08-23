import React from 'react';
import { Star, Download, Users } from 'lucide-react';

const games = [
  {
    id: 1,
    title: "Cyber Warriors",
    genre: "Action RPG",
    rating: 4.8,
    downloads: "2.5M",
    players: "850K",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
    isNew: true
  },
  {
    id: 2,
    title: "Space Odyssey",
    genre: "Strategy",
    rating: 4.6,
    downloads: "1.8M",
    players: "620K",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=400",
    isNew: false
  },
  {
    id: 3,
    title: "Medieval Legends",
    genre: "Adventure",
    rating: 4.9,
    downloads: "3.2M",
    players: "1.2M",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    isNew: true
  },
  {
    id: 4,
    title: "Racing Thunder",
    genre: "Racing",
    rating: 4.7,
    downloads: "4.1M",
    players: "950K",
    image: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=400",
    isNew: false
  }
];

const FeaturedGames = () => {
  return (
    <section id="games" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Games
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the most popular and trending games in our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="relative">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {game.isNew && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {game.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{game.genre}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{game.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Download className="w-4 h-4" />
                    <span>{game.downloads}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{game.players} playing</span>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-gray-600 hover:border-cyan-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200">
            View All Games
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;