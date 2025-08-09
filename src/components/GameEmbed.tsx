'use client';

import { useEffect, useRef } from 'react';
import type { Project } from '@/data/projects';

interface GameEmbedProps {
  game: Project;
  className?: string;
  showHeader?: boolean;
  previewMode?: boolean; // New prop for preview optimization
}

export default function GameEmbed({ game, className = '', showHeader = true, previewMode = false }: GameEmbedProps) {
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
  
  // Add performance hints via URL parameters for preview mode
  const optimizedEmbedUrl = previewMode && embedUrl 
    ? `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}preview=true&performance=optimized`
    : embedUrl;

  // Different sizing strategies for preview vs full display
  const iframeClassName = previewMode 
    ? "w-full h-[400px] md:h-[500px]" // Taller for previews to show UI elements
    : "w-full h-96 md:h-[500px]"; // Standard size
    
  const performanceProps = previewMode ? {
    // Optimizations for preview mode while preserving functionality
    style: {
      transform: 'translateZ(0)',
      willChange: 'auto', // Less aggressive will-change for preview
      isolation: 'isolate',
    } as React.CSSProperties,
    loading: "lazy" as const,
  } : {
    // Standard optimizations for full display
    style: {
      transform: 'translateZ(0)',
      willChange: 'transform',
      isolation: 'isolate',
    } as React.CSSProperties,
    loading: "lazy" as const,
  };

  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 relative ${className}`}
         style={{
           // Performance optimizations for container
           contain: 'layout style paint', // CSS containment for performance
           transform: 'translateZ(0)', // Force hardware acceleration
         }}>
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
      
      {/* Preview Mode Full Game Link - positioned over iframe */}
      {previewMode && (game.playUrl && game.playUrl !== '#') && (
        <>
          <div className="absolute top-4 right-4 z-10">
            <a
              href={game.playUrl}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg backdrop-blur-sm"
              title="Open full game page"
            >
              <span>🎮</span>
              <span>Play Full Game</span>
              <span>→</span>
            </a>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <a
              href={game.playUrl}
              className="inline-flex items-center gap-2 px-3 py-2 bg-black/70 hover:bg-black/90 text-white text-xs font-medium rounded-full transition-colors shadow-lg backdrop-blur-sm border border-white/20"
              title="Open full game page"
            >
              <span>View Full Game</span>
              <span>↗</span>
            </a>
          </div>
        </>
      )}
      
      <iframe
        ref={gameRef}
        src={optimizedEmbedUrl}
        className={iframeClassName}
        title={`${game.title} - Interactive Game`}
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        {...performanceProps}
      />
    </div>
  );
}
