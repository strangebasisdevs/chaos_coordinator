'use client';

import Link from 'next/link';
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { getAllProjects } from '@/data/projects';

export default function TimeDecomposesProject() {
  const projects = getAllProjects();
  const project = projects.find(p => p.id === 'time_decomposes');

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectPageLayout
      project={project}
      embedClassName="mb-8"
      showFullscreenButton
      fullscreenHref="/projects/time_decomposes/fullscreen"
    >
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
    </ProjectPageLayout>
  );
}
