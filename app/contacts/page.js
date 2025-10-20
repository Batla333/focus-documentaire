"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contacts() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
    filmTitre: "",
    filmLien: "",
    filmDescription: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Email envoyé avec succès !");
      setFormData({
        nom: "",
        email: "",
        message: "",
        filmTitre: "",
        filmLien: "",
        filmDescription: "",
      });
    } else {
      setStatus("❌ Erreur lors de l’envoi, réessayez.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-10 text-gray-800">
      <header className="bg-white shadow-md w-full mb-10 flex justify-between items-center px-8 py-4">
    <Link
      href="/"
    >
       <img
      src="/images/logoblanc.png"
      alt="FOCUS documentaire"
      className="w-50 h-auto rounded-none shadow-none object-contain"
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
          > Articles
            
          </Link>
          <Link
            href="/contacts"
            className="px-4 py-2 rounded-full text-white bg-green-700 font-medium border border-transparent hover:bg-green-800 transition-all duration-300"
          >
            Contacts
          </Link>
        </nav>

  </header>
  
      <h1 className="text-4xl font-bold mb-8 text-center">
        Contactez FOCUS documentaire
      </h1>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <p className="text-lg text-gray-700 text-center">
          Vous pouvez nous écrire à{" "}
          <a
            href="mailto:contact@focusdocumentaire.com"
            className="text-green-700 font-semibold underline hover:text-green-900"
          >
            contact@focusdocumentaire.com
          </a>
          {" "}ou remplir le formulaire ci-dessous :
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <textarea
            placeholder="Votre message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className="w-full border border-gray-300 p-3 rounded-lg h-32"
          />
          <hr />
          <h2 className="text-lg font-semibold text-gray-800">
            Proposer un film à intégrer à la docuthèque :
          </h2>
          <input
            type="text"
            placeholder="Titre du film"
            value={formData.filmTitre}
            onChange={(e) =>
              setFormData({ ...formData, filmTitre: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Lien du film (YouTube, Vimeo...)"
            value={formData.filmLien}
            onChange={(e) =>
              setFormData({ ...formData, filmLien: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <textarea
            placeholder="Courte description du film"
            value={formData.filmDescription}
            onChange={(e) =>
              setFormData({ ...formData, filmDescription: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-lg h-24"
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition-all duration-300"
          >
            Envoyer
          </button>
        </form>

        {status && <p className="text-center mt-4 text-gray-600">{status}</p>}
      </div>
    </main>
  );
}
