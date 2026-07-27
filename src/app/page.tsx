'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { KeyboardEvent, MouseEvent } from 'react';

export default function Home() {
  const router = useRouter();

  const handleCardClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('a, button')) {
      return;
    }

    router.push('/streaming');
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      router.push('/streaming');
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8">
        <div className="text-2xl font-bold text-white">
          <span className="text-purple-400">Chaos</span> Coordinator
        </div>
        <div className="hidden md:flex space-x-6 text-white">
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
          <Link
            href="#contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-purple-400">strangebasis</span>
            <br />
            Creative Code & Chaos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Game designer, content creator, and digital artist bringing
            interactive experiences to life through code and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Projects
            </Link>
            <Link
              href="/streaming"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Peruse Content
            </Link>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Projects Section */}
          <Link
            href="/projects"
            id="projects"
            className="block bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transition-transform hover:scale-[1.01] hover:bg-white/15"
          >
            <div className="text-4xl mb-4" title="briefcase emoji">💼</div>
            <h3 className="text-2xl font-bold text-white mb-4">Projects & Interactive Experiences</h3>
            <p className="text-gray-300 mb-6">
              Explore our creative projects, web applications, interactive experiences, and digital projects
              that showcase technical skill and artistic vision. From games to tools, all designed with
              accessibility and user experience in mind.
            </p>
            <span className="text-purple-400 hover:text-purple-300 font-semibold">
              View All Projects →
            </span>
          </Link>

          {/* Streaming Section */}
          <div
            id="streaming"
            role="link"
            tabIndex={0}
            onClick={handleCardClick}
            onKeyDown={handleCardKeyDown}
            className="cursor-pointer bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transition-transform hover:scale-[1.01] hover:bg-white/15"
          >
            <div className="text-4xl mb-4" title="television emoji">📺</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Content Creation
            </h3>
            <p className="text-gray-300 mb-6">
              Follow my journey in game development, assuaging my gaming addictions,
              creating music, videos, and whatever strikes me in the moment. You can
              find my content on{' '}
              <a
                href="https://www.twitch.tv/strangebasis"
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:text-purple-300 font-semibold"
                onClick={(event) => event.stopPropagation()}
              >
                Twitch
              </a>{' '}
              and{' '}
              <a
                href="https://www.youtube.com/@strangebasis"
                target="_blank"
                rel="noreferrer"
                className="text-red-400 hover:text-red-300 font-semibold"
                onClick={(event) => event.stopPropagation()}
              >
                YouTube
              </a>. Check
              out my{' '}
              <a
                href="https://bsky.app/profile/strangebasis.bsky.social"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold"
                onClick={(event) => event.stopPropagation()}
              >
                BlueSky
              </a>{' '}
              for updates and strangebasis co news day to day.
            </p>
            <span className="text-purple-400 hover:text-purple-300 font-semibold">
              Watch Content →
            </span>
          </div>
        </div>

        {/* Company Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            About strangebasis co
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            strangebasis co is my creative company focused on innovation and
            inclusion within game design, interactive media, and content creation.
            We explore the boundaries between art, technology, and storytelling to
            aim at creating a universally accessible experience. Our mission is to inspire
            curiosity and foster a community of diverse creators and innovators.
          </p>
        </div>
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
