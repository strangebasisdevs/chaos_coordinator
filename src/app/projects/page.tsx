'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getAllProjects, projectCategories, type UnifiedProject } from '@/data/projects';
import GameEmbed from '@/components/GameEmbed';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<UnifiedProject | null>(null);
  
  const projects = getAllProjects(); // Get all projects including games
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
            Projects & Interactive Experiences
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive collection of web applications, interactive experiences, 
            development tools, and creative projects that demonstrate our technical 
            capabilities and innovative approach to problem-solving.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
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

        {/* Featured Project Display */}
        {selectedProject && (
          <div className="mb-12 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Project Embed Area - Only show iframe for interactive projects */}
            {(selectedProject.embedUrl || selectedProject.playUrl) && (
              <GameEmbed 
                game={selectedProject} 
                className="mb-4"
                showHeader={false}
                previewMode={true}
              />
            )}

            {/* Project Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Description
                </h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Technologies
                </h3>
                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {selectedProject.controls && selectedProject.controls.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-white mb-2">Controls:</h4>
                    <ul className="text-gray-300 text-sm">
                      {selectedProject.controls.map((control, index) => (
                        <li key={index} className="mb-1">
                          • {control}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

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
                <p className="text-gray-300 mb-4">
                  {project.shortDescription || project.description}
                </p>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
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
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {(project.embedUrl || project.playUrl) && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg font-semibold transition-colors"
                    >
                      Preview
                    </button>
                  )}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-lg font-semibold transition-colors"
                    >
                      Game Page
                    </Link>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
