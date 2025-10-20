"use client";
import { useState } from "react";

export default function HeaderSearch() {
  const [q, setQ] = useState("");
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="w-full">
      <input
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Rechercher un article, un film..."
        className="w-full border border-green-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
      />
    </form>
  );
}
