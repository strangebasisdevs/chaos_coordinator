'use client';

import Link from 'next/link';
import ProjectEmbed from '@/components/ProjectEmbed';
import { getAllProjects } from '@/data/projects';

export default function StrangeWavesProject() {
  const projects = getAllProjects();
  const project = projects.find(p => p.id === 'strange_waves');

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
        <div className="relative">
          <div className="bg-black/30 rounded-lg overflow-hidden mb-8">
            <ProjectEmbed project={project} className="h-[600px] w-full" />
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            <Link
              href="/projects/strange_waves/fullscreen"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
              Fullscreen
            </Link>
          </div>
        </div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">About the Project</h2>
            <p className="text-gray-300">
              Strange Waves is an interactive audio visualization experience that transforms sound into hypnotic wave patterns. 
              The project creates a dynamic visual representation of audio frequencies, allowing users to interact with and shape 
              the visualization in real-time.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">How to Use</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Controls</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.controls?.map((control) => (
                  <li key={control}>{control}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
