
import Link from "next/link";

export default function Contacts() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">
      {/* Header */}
      <header className="bg-white shadow-md w-full mb-10 flex justify-between items-center px-8 py-4">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="FOCUS documentaire"
            className="w-50 h-auto rounded-none shadow-none object-contain cursor-pointer"
          />
        </Link>

        <nav className="flex gap-4">
          <Link
            href="/actualites"
            className="px-4 py-2 rounded-full text-gray-800 font-medium border border-transparent hover:border-green-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
          >
            Actualités
          </Link>
          <Link
            href="/articles"
            className="px-4 py-2 rounded-full text-gray-800 font-medium border border-transparent hover:border-green-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
          >
            Articles
          </Link>
          <Link
            href="/contacts"
            className="px-4 py-2 rounded-full text-white bg-green-700 font-medium border border-transparent hover:bg-green-800 transition-all duration-300"
          >
            Contacts
          </Link>
        </nav>
      </header>

      <h1 className="text-5xl font-bold mb-4">Page à venir !</h1>
    </main>
  );
}






