import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8 mt-20 max-w-8/10 mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Personal Notes Manager
        </h1>
        <p className="text-xl mb-8">
          Your digital notebook - organize your thoughts, ideas, and tasks
        </p>
        <Link
          href="/create"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Create Your First Note
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">📝 Easy to Create</h3>
          <p className="text-gray-600">
            Create notes quickly with our simple interface
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">🔍 Quick Search</h3>
          <p className="text-gray-600">
            Find your notes instantly with search functionality
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">📱 Access Anywhere</h3>
          <p className="text-gray-600">
            Access your notes from any device, anytime
          </p>
        </div>
      </section>

      {/* Recent Notes Preview */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Recent Notes</h2>
        <div className="grid md:grid-cols-2 gap-4"></div>
      </section>
    </div>
  );
}
