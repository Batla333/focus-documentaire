"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
    filmTitre: "",
    filmLien: "",
    filmDescription: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message envoyé avec succès !");
      setFormData({
        nom: "",
        email: "",
        message: "",
        filmTitre: "",
        filmLien: "",
        filmDescription: "",
      });
    } else {
      setStatus("❌ Une erreur est survenue. Réessaie plus tard.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">
      {/* HEADER */}
      <header className="bg-white shadow-md w-full mb-10 flex justify-between items-center px-8 py-4">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="FOCUS documentaire"
            className="w-50 h-auto object-contain"
          />
        </Link>
        <nav className="flex gap-4">
          <Link
            href="/actualites"
            className="px-4 py-2 rounded-full text-gray-800 hover:text-green-700"
          >
            Actualités
          </Link>
          <Link
            href="/articles"
            className="px-4 py-2 rounded-full text-gray-800 hover:text-green-700"
          >
            Articles
          </Link>
          <Link
            href="/contacts"
            className="px-4 py-2 rounded-full text-white bg-green-700 hover:bg-green-800"
          >
            Contacts
          </Link>
        </nav>
      </header>

      {/* FORMULAIRE */}
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
          Contact & Propositions
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Tu peux ici envoyer un message ou proposer un film à ajouter à la Docuthèque.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-700"
              placeholder="Écris ton message ici..."
            ></textarea>
          </div>

          {/* SECTION FILM */}
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            💡 Proposer un film à la Docuthèque
          </h2>
          <p className="text-gray-500 mb-3 text-sm">
            (facultatif)
          </p>

          <div>
            <label className="block text-sm font-medium mb-1">
              Titre du film
            </label>
            <input
              type="text"
              name="filmTitre"
              value={formData.filmTitre}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Lien vers le film (YouTube, Vimeo…)
            </label>
            <input
              type="text"
              name="filmLien"
              value={formData.filmLien}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Brève description
            </label>
            <textarea
              name="filmDescription"
              value={formData.filmDescription}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition"
          >
            Envoyer
          </button>
        </form>

        {status && (
          <p className="text-center text-sm text-gray-600 mt-4">{status}</p>
        )}
      </section>
    </main>
  );
}
