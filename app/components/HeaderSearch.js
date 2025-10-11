"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const [resultats, setResultats] = useState([]);
  const [films, setFilms] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/data/films.json")
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((err) => console.error("Erreur JSON:", err));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value === "") {
      setResultats([]);
    } else {
      const filtres = films.filter(
        (f) =>
          f.titre.toLowerCase().includes(value.toLowerCase()) ||
          f.realisateur.some((r) =>
            r.toLowerCase().includes(value.toLowerCase())
          )
      );
      setResultats(filtres);
    }
  };

  const handleClick = (titre) => {
    const anchor = titre.replace(/\s+/g, "-");
    router.push(`/docutheque#${anchor}`);
    setQuery("");
    setResultats([]);
  };

  return (
    <div className="relative w-full max-w-md ">
      <input
        type="text"
        placeholder="Rechercher un film, un réalisateur..."
        value={query}
        onChange={handleSearch}
        className="w-full px-4 py-2 border rounded-full text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {resultats.length > 0 && (
        <ul className="absolute top-full text-gray-500 mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto z-50">
          {resultats.map((r, i) => (
            <li
              key={i}
              onClick={() => handleClick(r.titre)}
              className="px-4 py-2 hover:bg-green-50 cursor-pointer"
            >
              {r.titre} — {r.realisateur.join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
