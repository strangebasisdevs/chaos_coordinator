'use client';

import Link from 'next/link';

export default function TimeDecomposesFullscreen() {
  return (
    <div className="min-h-screen bg-black">
      {/* Minimal Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm">
        <div className="flex justify-between items-center p-4">
          <Link href="/games/time_decomposes" className="text-white hover:text-purple-400 transition-colors">
            ← Back to Game Page
          </Link>
          <div className="text-white text-sm">
            <span className="text-purple-400">Time Decomposes</span> - Fullscreen
          </div>
          <Link href="/" className="text-white hover:text-purple-400 transition-colors">
            <span className="text-purple-400">Chaos</span> Coordinator
          </Link>
        </div>
      </div>

      {/* Fullscreen Game */}
      <iframe
        src="/games/time_decomposes/index.html"
        className="w-full h-screen"
        title="Time Decomposes - Mushroom Growth Simulator (Fullscreen)"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}