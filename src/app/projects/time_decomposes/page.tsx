'use client';

import Link from 'next/link';
import ProjectEmbed from '@/components/ProjectEmbed';
import { getAllProjects } from '@/data/projects';

export default function TimeDecomposesProject() {
  const projects = getAllProjects();
  const project = projects.find(p => p.id === 'time_decomposes');

  if (!project) {
    return <div>Project not found</div>;
  }

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
            href="/projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projects
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
        <div className="text-center mb-8">
          <Link 
            href="/projects"
            className="text-purple-400 hover:text-purple-300 mb-4 inline-block"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Project Embed */}
        <ProjectEmbed 
          project={project} 
          className="mb-8"
          showHeader={false}
        />

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">About This Project</h3>
            <p className="text-gray-300 mb-4">
              {project.description}
            </p>
            {project.controls && project.controls.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Controls</h4>
                <ul className="text-gray-300 space-y-1">
                  {project.controls.map((control, index) => (
                    <li key={index}>• {control}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
            {project.technologies && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
            <div className="space-y-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  View Source Code
                </a>
              )}
              <Link
                href="/projects"
                className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
