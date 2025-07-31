'use client';

import Link from 'next/link';
import { unifiedProjects } from '@/data/projects';
import GameEmbed from '@/components/GameEmbed';

export default function TimeDecomposesGame() {
  // Get the time_decomposes project data
  const timeDecomposesProject = unifiedProjects.find(p => p.id === 'time_decomposes')!;

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
            href="/games"
            className="hover:text-purple-400 transition-colors"
          >
            Games
          </Link>
          <Link
            href="/streaming"
            className="hover:text-purple-400 transition-colors"
          >
            Streaming
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {/* Game Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Time Decomposes
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            An interactive mushroom growth simulator using L-systems and cellular automata.
            Watch as mycelium patterns evolve and decompose over time.
          </p>
          
          {/* Controls Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Controls</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <span className="bg-purple-600/30 px-3 py-1 rounded-full">Mouse movement</span>
              <span className="bg-purple-600/30 px-3 py-1 rounded-full">Click to interact</span>
            </div>
          </div>
        </div>

        {/* Game Container */}
        <div className="max-w-6xl mx-auto">
          <GameEmbed 
            game={timeDecomposesProject}
            className="shadow-2xl"
            showHeader={true}
          />
        </div>

        {/* Project Info */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">About This Project</h3>
              <p className="text-gray-300 mb-4">
                Time Decomposes explores the fascinating world of fungal growth through 
                computational simulation. Using L-systems for structural growth and 
                cellular automata for environmental interactions, this piece creates 
                ever-evolving mycelium patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full">
                  p5.js
                </span>
                <span className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full">
                  L-systems
                </span>
                <span className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full">
                  Cellular Automata
                </span>
                <span className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full">
                  Procedural Generation
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Inspiration</h3>
              <p className="text-gray-300 mb-4">
                Inspired by the intricate patterns of mycelium growth in petri dishes 
                and the mathematical beauty of L-systems, this simulation bridges the 
                gap between biological processes and computational art.
              </p>
              <div className="flex gap-3 mt-4">
                <Link
                  href="https://github.com/strangebasisdevs/time_decomposes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-center py-2 rounded-lg font-semibold transition-colors"
                >
                  View Source
                </Link>
                <Link
                  href="/games"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-lg font-semibold transition-colors"
                >
                  More Games
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 mt-16">
        <p>
          &copy; 2025 strangebasis / Chaos Coordinator. All rights reserved.
        </p>
      </footer>
    </div>
  );
}