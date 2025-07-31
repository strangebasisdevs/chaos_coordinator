import Link from 'next/link';
import { StreamingPlatform, ContentSeries } from '@/types';

const platforms: StreamingPlatform[] = [
  {
    name: 'Twitch',
    url: '#',
    description: 'Live coding, game development, and creative streams',
    icon: '📺',
  },
  {
    name: 'YouTube',
    url: '#',
    description: 'Tutorials, dev logs, and project showcases',
    icon: '▶️',
  },
  {
    name: 'Discord',
    url: '#',
    description: 'Community discussions and live collaboration',
    icon: '💬',
  },
];

const contentSeries: ContentSeries[] = [
  {
    title: 'Game Development from Scratch',
    description:
      'Building a complete game from concept to release, documenting every step.',
    episodes: 12,
    category: 'dev-log',
    thumbnail: '/placeholder-devlog.jpg',
  },
  {
    title: 'Creative Coding Tutorials',
    description: 'Learn to create art and interactive experiences with code.',
    episodes: 8,
    category: 'tutorial',
    thumbnail: '/placeholder-tutorial.jpg',
  },
  {
    title: 'Indie Game Spotlight',
    description:
      'Playing and analyzing innovative indie games for inspiration.',
    episodes: 15,
    category: 'gameplay',
    thumbnail: '/placeholder-gameplay.jpg',
  },
  {
    title: 'Digital Art Process',
    description:
      'Time-lapse and commentary on digital art creation techniques.',
    episodes: 6,
    category: 'art',
    thumbnail: '/placeholder-art-process.jpg',
  },
];

const categoryColors = {
  tutorial: 'from-green-600 to-emerald-600',
  gameplay: 'from-blue-600 to-cyan-600',
  'dev-log': 'from-purple-600 to-violet-600',
  art: 'from-pink-600 to-rose-600',
};

export default function Streaming() {
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
            href="/portfolio"
            className="hover:text-purple-400 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/games"
            className="hover:text-purple-400 transition-colors"
          >
            Games
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Content & Streaming
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow my creative journey through live streams, tutorials, and
            video content. Learn game development, creative coding, and digital
            art alongside me.
          </p>
        </div>

        {/* Live Status */}
        <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <div>
                <h3 className="text-white font-semibold">Currently Offline</h3>
                <p className="text-gray-300">
                  Next stream: Check social media for updates
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Notifications
            </Link>
          </div>
        </div>

        {/* Platforms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Find Me On
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.url}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-300">{platform.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Content Series */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Content Series
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {contentSeries.map((series) => (
              <div
                key={series.title}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all"
              >
                {/* Thumbnail */}
                <div
                  className={`h-48 bg-gradient-to-br ${categoryColors[series.category]} flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">
                      {series.category === 'tutorial' && '🎓'}
                      {series.category === 'gameplay' && '🎮'}
                      {series.category === 'dev-log' && '⚙️'}
                      {series.category === 'art' && '🎨'}
                    </div>
                    <span className="text-lg font-semibold">
                      {series.title}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {series.title}
                    </h3>
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-full capitalize">
                      {series.category.replace('-', ' ')}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{series.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">
                      {series.episodes} episodes
                    </span>
                    <Link
                      href="#"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Watch Series
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Streaming Schedule
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Monday</h4>
              <p className="text-gray-300">Game Development</p>
              <p className="text-sm text-gray-400">7:00 PM - 9:00 PM EST</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Wednesday</h4>
              <p className="text-gray-300">Creative Coding</p>
              <p className="text-sm text-gray-400">7:00 PM - 9:00 PM EST</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Friday</h4>
              <p className="text-gray-300">Community Playtime</p>
              <p className="text-sm text-gray-400">8:00 PM - 10:00 PM EST</p>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-6">
            * Schedule may vary. Follow on social media for updates!
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Join the Creative Community
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Be part of the journey! Follow along as we explore game development,
            creative coding, and digital art together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe for Updates
            </Link>
            <Link
              href="#"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Discord Community
            </Link>
          </div>
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
