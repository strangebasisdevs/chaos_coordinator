// Centralized data source for projects
// This ensures consistency across projects, regardless of type

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string; // For cards/previews
  category: 'web' | 'game' | 'art' | 'tool' | 'puzzle' | 'arcade' | 'experimental';
  technologies?: string[];
  imageUrl?: string;
  imageAltText?: string;
  demoUrl?: string;
  playUrl?: string;
  embedUrl?: string;
  githubUrl?: string;
  controls?: string[];
  featured?: boolean;
}

export interface StreamingPlatform {
  name: string;
  url: string;
  description: string;
  icon: string;
  isLive?: boolean;
  alt_text: string;
}

export interface ContentSeries {
  title: string;
  description: string;
  episodes: number;
  category: 'tutorial' | 'gameplay' | 'dev-log' | 'art';
  thumbnail: string;
  alt_text: string;
  playlistUrl?: string;
}

// Master data source - single source of truth
export const projects: Project[] = [
  {
    id: 'time_decomposes',
    title: 'Time Decomposes',
    description: 'An interactive mushroom growth simulator using L-systems and cellular automata to procedurally generate mycelium patterns. This piece explores the fascinating world of fungal growth through computational simulation, creating ever-evolving organic structures.',
    shortDescription: 'Interactive mushroom growth simulator using L-systems and cellular automata.',
    category: 'art',
    technologies: ['p5.js', 'JavaScript', 'L-systems', 'Cellular Automata'],
    imageUrl: 'TODO: add image URL',
    imageAltText: 'TODO: add alt text for image',
    demoUrl: '/projects/time_decomposes',
    playUrl: '/projects/time_decomposes',
    embedUrl: '/submodules/time_decomposes/index.html', // Original version preserves all UI elements
    githubUrl: 'https://github.com/strangebasisdevs/time_decomposes',
    controls: ['Mouse movement', 'Click to interact'],
    featured: true,
  },
  // Placeholder projects for demonstration
  {
    id: 'interactive_web_game',
    title: 'Interactive Web Game',
    description: 'A browser-based puzzle game built with JavaScript and Canvas API.',
    category: 'game',
    technologies: ['JavaScript', 'Canvas API', 'Web Audio API'],
    imageUrl: 'TODO: add image URL',
    imageAltText: 'TODO: add alt text for image',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'chaos_coordinator',
    title: 'Chaos Coordinator',
    description: 'The official StrangeBasis Co Chaos Coordinator. A creative company website built with Next.js and Tailwind CSS. This website.',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/placeholder-web.jpg',
    demoUrl: '/',
    githubUrl: '#',
  },
  {
    id: 'game_dev_tool',
    title: 'Game Development Tool',
    description: 'Custom tool for level design and asset management.',
    category: 'tool',
    technologies: ['Node.js', 'Electron', 'React'],
    imageUrl: '/placeholder-tool.jpg',
    githubUrl: '#',
  },
  {
    id: 'code_puzzle_adventure',
    title: 'Code Puzzle Adventure',
    description: 'Solve programming puzzles in this interactive coding game.',
    category: 'puzzle',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    imageUrl: '/placeholder-puzzle.jpg',
    playUrl: '#',
    embedUrl: '#',
    controls: ['Arrow keys', 'Enter to submit', 'R to reset'],
  },
  {
    id: 'rhythm_chaos',
    title: 'Rhythm Chaos',
    description: 'A music-based arcade game with procedural audio.',
    category: 'arcade',
    technologies: ['Web Audio API', 'Canvas', 'JavaScript'],
    imageUrl: '/placeholder-rhythm.jpg',
    playUrl: '#',
    embedUrl: '#',
    controls: ['WASD or Arrow keys', 'Spacebar to jump', 'Mouse for special'],
  },
  {
    id: 'experimental_proto',
    title: 'Experimental Proto',
    description: 'A prototype exploring new interaction mechanics.',
    category: 'experimental',
    technologies: ['WebGL', 'Three.js', 'JavaScript'],
    imageUrl: '/placeholder-experimental.jpg',
    playUrl: '#',
    controls: ['Various - instructions in game'],
  },
];

// Helper functions to filter data for specific pages
export const getProjects = () => 
  projects.filter(item => ['web', 'tool'].includes(item.category));

export const getGames = () => 
  projects.filter(item => ['game', 'puzzle', 'arcade', 'experimental'].includes(item.category));

export const getAllProjects = () => 
  projects; // Return all projects for the projects page

export const getFeaturedProjects = () => 
  projects.filter(item => item.featured);

export const getFeaturedGames = () => 
  projects.filter(item => item.featured && ['game', 'puzzle', 'arcade', 'experimental', 'art'].includes(item.category));

// Category mappings

export const projectCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Development' },
  { key: 'game', label: 'Interactive Games' },
  { key: 'art', label: 'Digital Art' },
  { key: 'tool', label: 'Development Tools' },
  { key: 'puzzle', label: 'Puzzle Games' },
  { key: 'arcade', label: 'Arcade Games' },
  { key: 'experimental', label: 'Experimental' },
];

export const gameCategories = [
  { key: 'all', label: 'All Games' },
  { key: 'puzzle', label: 'Puzzle' },
  { key: 'arcade', label: 'Arcade' },
  { key: 'art', label: 'Interactive Art' },
  { key: 'experimental', label: 'Experimental' },
];
