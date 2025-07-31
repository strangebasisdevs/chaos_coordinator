'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getGames, gameCategories, type UnifiedProject } from '@/data/projects';
import GameEmbed from '@/components/GameEmbed';

export default function Games() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedGame, setSelectedGame] = useState<UnifiedProject | null>(null);

  const games = getGames();
  const filteredGames = games.filter(
    (game) => activeCategory === 'all' || game.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8">
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-purple-400">Chaos</span> Coordinator
        </Link>
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-purple-400 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/streaming"
            className="hover:text-purple-400 transition-colors"
          >
            Streaming
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Web Games & Interactive Art
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Playable games and interactive experiences that run directly in your
            browser. Explore the intersection of code, art, and interactivity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {gameCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category.key
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Game Display */}
        {selectedGame && (
          <div className="mb-12 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">
                {selectedGame.title}
              </h2>
              <button
                onClick={() => setSelectedGame(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Game Embed Area */}
            <GameEmbed 
              game={selectedGame} 
              className="mb-4"
              showHeader={false}
              previewMode={true}
            />

            {/* Game Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Description
                </h3>
                <p className="text-gray-300">{selectedGame.description}</p>
              </div>
              {selectedGame.controls && selectedGame.controls.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Controls
                  </h3>
                  <ul className="text-gray-300">
                    {selectedGame.controls.map((control, index) => (
                      <li key={index} className="mb-1">
                        • {control}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all"
            >
              {/* Game Preview */}
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🎮</div>
                  <span className="text-lg font-semibold">{game.title}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {game.title}
                </h3>
                <p className="text-gray-300 mb-4">{game.description}</p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full capitalize">
                    {game.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedGame(game)}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-lg font-semibold transition-colors"
                  >
                    Play Here
                  </button>
                  {game.playUrl && (
                    <Link
                      href={game.playUrl}
                      className="flex-1 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-center py-2 rounded-lg font-semibold transition-colors"
                    >
                      Game Page
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            <p>No games found in this category.</p>
          </div>
        )}

        {/* Development Note */}
        <div className="mt-16 bg-yellow-600/20 border border-yellow-500/30 rounded-xl p-6">
          <h3 className="text-yellow-300 font-semibold mb-2">
            🚧 Development Note
          </h3>
          <p className="text-yellow-200">
            The game embedding system is ready for your games! You can embed
            games using:
          </p>
          <ul className="text-yellow-200 mt-2 ml-4">
            <li>• IFrames for external hosted games</li>
            <li>• Canvas/WebGL for direct integration</li>
            <li>• p5.js, Three.js, or other web game frameworks</li>
            <li>• Unity WebGL builds</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400">
        <p>
          &copy; 2025 strangebasis / Chaos Coordinator. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
