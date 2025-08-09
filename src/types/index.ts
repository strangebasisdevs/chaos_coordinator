// Type definitions for Chaos Coordinator project
// Note: Main project types have been moved to @/data/projects for better organization

// Legacy interface kept for reference - use Project from @/data/projects instead
export interface LegacyProject {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'game' | 'art' | 'tool';
  technologies: string[];
  imageUrl: string; // TODO: implement image rendering
  imageAltText: string; // TODO: add alt text for images
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Legacy interface kept for reference - use Project from @/data/projects instead
export interface LegacyGame {
  id: string;
  title: string;
  description: string;
  category: 'puzzle' | 'arcade' | 'art' | 'experimental';
  playUrl: string;
  embedUrl?: string;
  controls: string[];
  featured?: boolean;
}
