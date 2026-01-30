export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-purple-950 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="text-6xl mb-6">🦄</div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
          Unicorn POS
        </h1>
        <p className="text-gray-400 text-lg mb-8">All-in-one UMKM Business Platform</p>
        <div className="flex gap-4 justify-center">
          <a href="/dashboard" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all">
            Mulai Sekarang
          </a>
        </div>
      </div>
    </main>
  );
}