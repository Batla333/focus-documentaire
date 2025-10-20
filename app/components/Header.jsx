"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#f5f5f5] w-full mb-10 flex justify-between items-center px-10 py-8 shadow-sm">
      {/* Barre de recherche */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Rechercher un article, un film..."
          className="border border-green-700 rounded-full px-4 py-2 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
        />
      </div>

      {/* Logo centré */}
      <div className="flex-1 flex justify-center">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="FOCUS documentaire"
            className="h-[130px] w-auto object-contain"
          />
        </Link>
      </div>

      {/* Navigation à droite */}
      <nav className="flex-1 flex justify-end gap-6 text-gray-700 text-lg">
        <Link href="/actualites" className="hover:text-green-700 transition">
          Actualités
        </Link>
        <Link href="/articles" className="hover:text-green-700 transition">
          Articles
        </Link>
        <Link href="/contacts" className="hover:text-green-700 transition">
          Contacts
        </Link>
      </nav>
    </header>
  );
}
