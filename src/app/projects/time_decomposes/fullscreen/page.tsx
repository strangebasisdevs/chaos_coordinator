'use client';

import { useEffect } from 'react';

export default function TimeDecomposesFullscreen() {
  useEffect(() => {
    // Redirect to the actual project
    window.location.href = '/submodules/time_decomposes/index.html';
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p>Loading Time Decomposes...</p>
        <p className="text-sm text-gray-400 mt-2">
          You should be redirected automatically. If not, 
          <a href="/submodules/time_decomposes/index.html" className="text-purple-400 underline ml-1">
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
