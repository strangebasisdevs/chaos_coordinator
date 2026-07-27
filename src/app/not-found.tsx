import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-purple-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          This page could not be found.
        </h1>
        <p className="text-gray-300 mb-8">
          The page you were looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
