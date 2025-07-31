// Centralized data source for projects and games
// This ensures consistency across portfolio and games sections

export interface UnifiedProject {
  id: string;
  title: string;
  description: string;
  shortDescription?: string; // For cards/previews
  category: 'web' | 'game' | 'art' | 'tool' | 'puzzle' | 'arcade' | 'experimental';
  technologies?: string[];
  imageUrl?: string;
  demoUrl?: string;
  playUrl?: string;
  embedUrl?: string;
  githubUrl?: string;
  controls?: string[];
  featured?: boolean;
  type: 'project' | 'game' | 'both'; // Determines where it appears
}

// Master data source - single source of truth
export const unifiedProjects: UnifiedProject[] = [
  {
    id: 'time_decomposes',
    title: 'Time Decomposes',
    description: 'An interactive mushroom growth simulator using L-systems and cellular automata to procedurally generate mycelium patterns. This piece explores the fascinating world of fungal growth through computational simulation, creating ever-evolving organic structures.',
    shortDescription: 'Interactive mushroom growth simulator using L-systems and cellular automata.',
    category: 'art',
    technologies: ['p5.js', 'JavaScript', 'L-systems', 'Cellular Automata'],
    imageUrl: '/placeholder-art.jpg',
    demoUrl: '/games/time_decomposes',
    playUrl: '/games/time_decomposes',
    embedUrl: '/games/time_decomposes/index.html', // Original version preserves all UI elements
    githubUrl: 'https://github.com/strangebasisdevs/time_decomposes',
    controls: ['Mouse movement', 'Click to interact'],
    featured: true,
    type: 'both',
  },
  // Placeholder projects for demonstration
  {
    id: 'interactive_web_game',
    title: 'Interactive Web Game',
    description: 'A browser-based puzzle game built with JavaScript and Canvas API.',
    category: 'game',
    technologies: ['JavaScript', 'Canvas API', 'Web Audio API'],
    imageUrl: '/placeholder-game.jpg',
    demoUrl: '#',
    githubUrl: '#',
    type: 'project',
  },
  {
    id: 'portfolio_website',
    title: 'Portfolio Website',
    description: 'Responsive portfolio website built with Next.js and Tailwind CSS.',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/placeholder-web.jpg',
    demoUrl: '#',
    githubUrl: '#',
    type: 'project',
  },
  {
    id: 'game_dev_tool',
    title: 'Game Development Tool',
    description: 'Custom tool for level design and asset management.',
    category: 'tool',
    technologies: ['Node.js', 'Electron', 'React'],
    imageUrl: '/placeholder-tool.jpg',
    githubUrl: '#',
    type: 'project',
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
    type: 'game',
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
    type: 'game',
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
    type: 'game',
  },
];

// Helper functions to filter data for specific pages
export const getProjects = () => 
  unifiedProjects.filter(item => item.type === 'project' || item.type === 'both');

export const getGames = () => 
  unifiedProjects.filter(item => item.type === 'game' || item.type === 'both');

export const getFeaturedProjects = () => 
  unifiedProjects.filter(item => item.featured && (item.type === 'project' || item.type === 'both'));

export const getFeaturedGames = () => 
  unifiedProjects.filter(item => item.featured && (item.type === 'game' || item.type === 'both'));

// Category mappings
export const portfolioCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Development' },
  { key: 'game', label: 'Games' },
  { key: 'art', label: 'Digital Art' },
  { key: 'tool', label: 'Tools' },
];

export const gameCategories = [
  { key: 'all', label: 'All Games' },
  { key: 'puzzle', label: 'Puzzle' },
  { key: 'arcade', label: 'Arcade' },
  { key: 'art', label: 'Interactive Art' },
  { key: 'experimental', label: 'Experimental' },
];
