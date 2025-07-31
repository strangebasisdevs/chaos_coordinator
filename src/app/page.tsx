import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8">
        <div className="text-2xl font-bold text-white">
          <span className="text-purple-400">Chaos</span> Coordinator
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <Link
            href="#portfolio"
            className="hover:text-purple-400 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#games"
            className="hover:text-purple-400 transition-colors"
          >
            Games
          </Link>
          <Link
            href="#streaming"
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
              href="#portfolio"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              href="#games"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Play Games
            </Link>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Portfolio Section */}
          <div
            id="portfolio"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-white mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-6">
              Explore my creative projects, web applications, and digital art
              pieces that showcase technical skill and artistic vision.
            </p>
            <Link
              href="/portfolio"
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              View All Projects →
            </Link>
          </div>

          {/* Games Section */}
          <div
            id="games"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-white mb-4">Web Games</h3>
            <p className="text-gray-300 mb-6">
              Interactive games and coding art projects that run directly in
              your browser. Experience the intersection of art and technology.
            </p>
            <Link
              href="/games"
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Play Games →
            </Link>
          </div>

          {/* Streaming Section */}
          <div
            id="streaming"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="text-4xl mb-4">📺</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Content Creation
            </h3>
            <p className="text-gray-300 mb-6">
              Follow my journey in game development, coding tutorials, and
              creative content across streaming platforms and video creation.
            </p>
            <Link
              href="/streaming"
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Watch Content →
            </Link>
          </div>
        </div>

        {/* Company Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            About strangebasis
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            strangebasis is my creative company focused on innovative game
            design, interactive media, and content creation. We explore the
            boundaries between art, technology, and storytelling to create
            unique digital experiences.
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
