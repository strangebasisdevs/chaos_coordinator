import Link from 'next/link';
import { StreamingPlatform } from '@/data/projects';

const platforms: StreamingPlatform[] = [
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv/strangebasis',
    description: 'Live coding, game development, and creative streams',
    icon: '📺',
    alt_text: 'television emoji',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@strangebasis',
    description: 'Tutorials, dev logs, and project showcases',
    icon: '▶️',
    alt_text: 'play button emoji',
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/UzRXpY7fXg',
    description: 'Community discussions and live collaboration',
    icon: '💬',
    alt_text: 'speech balloon emoji',
  },
  {
    name: 'BlueSky',
    url: 'https://bsky.app/profile/strangebasis.bsky.social',
    description: 'Updates and behind-the-scenes content',
    icon: '🔵',
    alt_text: 'blue circle emoji',
  },
];

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
            href="/projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projects
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
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://www.twitch.tv/strangebasis"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center"
              >
                Follow on Twitch for Alerts
              </Link>
              <Link
                href="https://www.youtube.com/@strangebasis?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center"
              >
                Subscribe & Hit the Bell (YouTube)
              </Link>
            </div>
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
                  <div className="text-4xl mb-4" title={platform.alt_text}>{platform.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-300">{platform.description}</p>
                </div>
              </Link>
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
              href="https://bsky.app/profile/strangebasis.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Follow for Updates
            </Link>
            <Link
              href="https://discord.gg/UzRXpY7fXg"
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
