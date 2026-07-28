'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, type KeyboardEvent, type MouseEvent } from 'react';
import { getAllProjects, projectCategories, type Project } from '@/data/projects';

export default function Projects() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = getAllProjects();
  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  const getProjectHref = (project: Project) =>
    project.demoUrl && project.demoUrl !== '#' ? project.demoUrl : `/projects/${project.id}`;

  const getProjectThumbnail = (project: Project) => {
    const explicit = project.thumbnailUrl || project.imageUrl;
    if (
      explicit &&
      explicit !== 'TODO: add image URL' &&
      explicit !== '#' &&
      !explicit.startsWith('/placeholder')
    ) {
      return explicit;
    }

    const candidates = [
      `/images/projects/${project.id}.gif`,
      `/images/projects/${project.id}.png`,
      `/images/projects/${project.id}.jpg`,
      `/images/projects/${project.id}.jpeg`,
      `/images/${project.id}.gif`,
      `/images/${project.id}.png`,
      `/images/${project.id}.jpg`,
      `/images/${project.id}.jpeg`,
    ];

    return candidates[0] || '/images/projects/placeholder.gif';
  };

  const handleProjectCardClick = (
    event: MouseEvent<HTMLElement>,
    project: Project
  ) => {
    const target = event.target as HTMLElement;
    if (target.closest('a, button')) {
      return;
    }

    router.push(getProjectHref(project));
  };

  const handleProjectCardKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    project: Project
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      router.push(getProjectHref(project));
    }
  };

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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              role="link"
              tabIndex={0}
              onClick={(event) => handleProjectCardClick(event, project)}
              onKeyDown={(event) => handleProjectCardKeyDown(event, project)}
              className="cursor-pointer bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all"
            >
              {/* Project Thumbnail */}
              <div className="h-48 overflow-hidden bg-slate-950">
                <Image
                  src={getProjectThumbnail(project)}
                  alt={project.imageAltText || project.title}
                  width={640}
                  height={360}
                  className="h-full w-full object-cover"
                  unoptimized
                />
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
                <div className="flex flex-wrap gap-3">
                  <span className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-lg font-semibold transition-colors">
                    Open Project
                  </span>
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-center py-2 rounded-lg font-semibold transition-colors"
                      onClick={(event) => event.stopPropagation()}
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
