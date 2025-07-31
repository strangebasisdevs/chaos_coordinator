'use client';

import { useEffect, useRef } from 'react';
import type { UnifiedProject } from '@/data/projects';

interface GameEmbedProps {
  game: UnifiedProject;
  className?: string;
  showHeader?: boolean;
}

export default function GameEmbed({ game, className = '', showHeader = true }: GameEmbedProps) {
  const gameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Optional: Add any initialization logic here
    if (gameRef.current) {
      // Could add postMessage communication with the iframe if needed
    }
  }, [game]);

  // Don't render if no playable URL
  if (!game.embedUrl && !game.playUrl && !game.demoUrl) {
    return (
      <div className={`bg-black/30 rounded-lg h-96 flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-300">
          <div className="text-4xl mb-4">🎮</div>
          <p className="text-lg font-semibold">{game.title}</p>
          <p className="text-sm mt-2">Game not yet implemented</p>
          {game.githubUrl && game.githubUrl !== '#' && (
            <a 
              href={game.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm mt-2 inline-block"
            >
              View Source Code →
            </a>
          )}
        </div>
      </div>
    );
  }

  const embedUrl = game.embedUrl || game.playUrl || game.demoUrl;

  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 ${className}`}>
      {showHeader && (
        <div className="bg-black/20 px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-white text-sm font-medium">{game.title}</span>
            {game.category && (
              <span className="px-2 py-1 bg-purple-600/30 text-purple-200 text-xs rounded-full capitalize">
                {game.category}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {game.githubUrl && game.githubUrl !== '#' && (
              <a
                href={game.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-white text-xs transition-colors"
                title="View Source"
              >
                📝 Source
              </a>
            )}
            {game.playUrl && game.playUrl !== '#' && (
              <a
                href={game.playUrl}
                className="text-purple-400 hover:text-white text-xs transition-colors"
                title="Dedicated Page"
              >
                🎮 Game Page
              </a>
            )}
            {game.playUrl && game.playUrl !== '#' && (
              <a
                href={`${game.playUrl}/fullscreen`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-white text-xs transition-colors"
                title="Fullscreen Mode"
              >
                🔍 Fullscreen
              </a>
            )}
          </div>
        </div>
      )}
      
      <iframe
        ref={gameRef}
        src={embedUrl}
        className="w-full h-96 md:h-[500px]"
        title={`${game.title} - Interactive Game`}
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
