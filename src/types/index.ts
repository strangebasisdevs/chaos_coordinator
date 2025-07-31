// Type definitions for Chaos Coordinator project

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'game' | 'art' | 'tool';
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  category: 'puzzle' | 'arcade' | 'art' | 'experimental';
  playUrl: string;
  embedUrl?: string;
  controls: string[];
  featured?: boolean;
}

export interface StreamingPlatform {
  name: string;
  url: string;
  description: string;
  icon: string;
  isLive?: boolean;
}

export interface ContentSeries {
  title: string;
  description: string;
  episodes: number;
  category: 'tutorial' | 'gameplay' | 'dev-log' | 'art';
  thumbnail: string;
  playlistUrl?: string;
}
