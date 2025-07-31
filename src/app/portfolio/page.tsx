'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'game' | 'art' | 'tool';
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

// Placeholder projects - replace with your actual projects
const projects: Project[] = [
  {
    id: '1',
    title: 'Interactive Web Game',
    description:
      'A browser-based puzzle game built with JavaScript and Canvas API.',
    category: 'game',
    technologies: ['JavaScript', 'Canvas API', 'Web Audio API'],
    imageUrl: '/placeholder-game.jpg',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Generative Art Project',
    description:
      'Algorithmic art piece that creates unique patterns using p5.js.',
    category: 'art',
    technologies: ['p5.js', 'TypeScript', 'WebGL'],
    imageUrl: '/placeholder-art.jpg',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description:
      'Responsive portfolio website built with Next.js and Tailwind CSS.',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/placeholder-web.jpg',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'Game Development Tool',
    description: 'Custom tool for level design and asset management.',
    category: 'tool',
    technologies: ['Node.js', 'Electron', 'React'],
    imageUrl: '/placeholder-tool.jpg',
    githubUrl: '#',
  },
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Development' },
  { key: 'game', label: 'Games' },
  { key: 'art', label: 'Digital Art' },
  { key: 'tool', label: 'Tools' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
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

      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in web development,
            game design, digital art, and creative coding.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {project.title}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-lg font-semibold transition-colors"
                    >
                      View Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="flex-1 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-center py-2 rounded-lg font-semibold transition-colors"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            <p>No projects found in this category.</p>
          </div>
        )}
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
