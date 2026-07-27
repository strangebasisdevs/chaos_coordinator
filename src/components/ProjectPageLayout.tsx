'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import ProjectEmbed from '@/components/ProjectEmbed';
import type { Project } from '@/data/projects';

interface ProjectPageLayoutProps {
  project: Project;
  children: ReactNode;
  title?: string;
  description?: string;
  embedClassName?: string;
  showFullscreenButton?: boolean;
  fullscreenHref?: string;
  fullscreenLabel?: string;
}

export default function ProjectPageLayout({
  project,
  children,
  title,
  description,
  embedClassName,
  showFullscreenButton = false,
  fullscreenHref,
  fullscreenLabel = 'Fullscreen',
}: ProjectPageLayoutProps) {
  const resolvedFullscreenHref =
    fullscreenHref ??
    (project.playUrl && project.playUrl !== '#' ? `${project.playUrl}/fullscreen` : undefined);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="flex justify-between items-center p-6 md:p-8">
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-purple-400">Chaos</span> Coordinator
        </Link>
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-purple-400 transition-colors">
            Projects
          </Link>
          <Link href="/streaming" className="hover:text-purple-400 transition-colors">
            Streaming
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <Link
            href="/projects"
            className="text-purple-400 hover:text-purple-300 mb-4 inline-block"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title ?? project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description ?? project.description}
          </p>
        </div>

        <div className="relative">
          <div className="bg-black/30 rounded-lg overflow-hidden mb-8">
            <ProjectEmbed project={project} className={embedClassName} showHeader={false} />
          </div>

          {showFullscreenButton && resolvedFullscreenHref && (
            <div className="absolute top-4 right-4 flex gap-2">
              <Link
                href={resolvedFullscreenHref}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                  />
                </svg>
                {fullscreenLabel}
              </Link>
            </div>
          )}
        </div>

        {children}
      </main>
    </div>
  );
}
