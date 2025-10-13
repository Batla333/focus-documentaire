import Link from "next/link";

export default function Depardon() {
  return (

     
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">

       {/* Header avec nom du site et bouton accueil */}
      <header className="bg-white shadow-md w-full mb-10 flex justify-between items-center px-8 py-4">
    <Link
      href="/"
    >
       <img
      src="/images/logo.png"
      alt="FOCUS documentaire"
      className="w-50 h-auto rounded-none shadow-none object-contain"
    />
    </Link>
  </header>

      {/* En-tête */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Raymond Depardon</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Photographe, cinéaste et journaliste français né en 1942, Raymond Depardon 
          a filmé la France rurale, les institutions et les marges du monde contemporain 
          avec une empathie unique et une attention rare à la parole, au cadre et au silence.
        </p>
      </section>

      {/* Image du réalisateur */}
      <section className="max-w-3xl mx-auto mb-16">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a8/RAYMOND_DEPARDON_AUTOPORTRAIT.jpg"
          alt="Raymond Depardon"
          className="w-100 mx-auto rounded-2xl shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">
          Raymond Depardon. (Photo : Autoportrait de Raymond Depardon, 1995. )
        </p>
      </section>

      {/* Filmographie */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Filmographie sélective</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Exemple de film */}

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/sanclemente.jpg"
                alt="San Clemente"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">San Clemente</h3>
            <p className="text-sm text-gray-500">1982</p>
          </div>


          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/delitsflagrants.jpg"
                alt="Délits Flagrants"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Délits Flagrants</h3>
            <p className="text-sm text-gray-500">1994</p>
          </div>


          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/profilspaysans.jpg"
                alt="Profils Paysans"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Profils paysans</h3>
            <p className="text-sm text-gray-500">2001-2005-2008</p>
          </div>


          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
                src="/images/journaldefrance.jpg"
                alt="Journal de France"
                className="rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">Journal de France</h3>
            <p className="text-sm text-gray-500">2012</p>
          </div>

        </div>
      </section>
    </main>
  );
}