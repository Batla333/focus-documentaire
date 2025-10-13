import Link from "next/link";

export default function beyrouthmaville() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      {/* En-tête visuelle */}
      <section className="relative w-full max-w-5xl mx-auto mb-15">
        <img
          src="/images/beyrouthmaville.jpg"
          alt="Beyrouth ma ville — Jocelyne Saab"
          className="w-full h-110 object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col justify-end p-10 text-white">
          <h1 className="text-5xl font-bold mb-2 drop-shadow-md">
            Beyrouth, ma ville
          </h1>
          <p className="text-lg italic drop-shadow-sm">
            Un film de Jocelyne Saab — Étude critique par Rémy Labat
          </p>
        </div>
      </section>

      {/* Corps de l’article */}
      <article className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-10 leading-relaxed text-gray-800">
        {/* Bloc auteur */}
        <div className="flex items-center gap-4 mb-10 border-l-4 border-green-700 pl-4">
          <img
            src="/images/logo.png"
            alt="FOCUS documentaire"
            className="w-14 h-14 object-contain rounded-full"
          />
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Article rédigé par
            </p>
            <p className="font-semibold text-gray-900">Rémy Labat</p>
            <p className="text-gray-500 text-sm">Publié en 2025</p>
          </div>
        </div>

        {/* Texte principal */}
        <p className="mb-2 text-sm text-justify">
            Juin 1982, Le Sud du Liban se fait envahir par une armée Israélienne massive. Beyrouth, 
            capitale du pays, se fait assiéger. La ville devient alors un espace abîmée et symptomatique d&apos;un 
            conflit Israelo-palestinien qui ne cesse de croître. C&apos;est ce Beyrouth qui sera filmée par Jocelyne Saab 
            dans l'ensemble de son œuvre, une ville marquée par les conflits, les bombardements et surtout une 
            médiatisation extrêmement péjorative, reflétant l&apos;image dune ville où ne réside que violence, débris, 
            et mort.
        </p>

        <p className="mb-4 text-sm text-justify">
            Dans Beyrouth ma Ville, troisième volet de la série beyrouthine de Jocelyne Saab, le 
            spectateur est interrogé sur l'image qu&apos;il peut avoir de la capitale. Dans son film, la réalisatrice met sa 
            caméra à disposition de ceux qui sont toujours là, qui vivent parmi les débris causés par les bombes. 
            Elle offre, aux vivants, l&apos;occasion d&apos;exister et surtout, de témoigner par leur présence, leur résistance. 
        </p>
     <h2 className="text-3xl text-center font-semibold mt-10 mb-4 text-gray-990">
            Jocelyne Saab, une auteure libanaise au service d'une parole résistante, survivante.
        </h2>
        <h2 className="text-2xl-justify font-semibold mt-10 mb-4 text-gray-900">
            Jocelyne Saab en tant qu'auteure-témoin.
        </h2>

        <p className="text-justify mb-4">
            Issue du milieu télévisé, Jocelyne Saab est influencée par des codes 
            associés au montage et à la production de reportage. Dès la première séquence, on 
            y voit une utilisation de la figure du “reporter de guerre”, à l&apos;instar d&apos;un “duplex”, 
            qu&apos;elle se réapproprie pour se mettre elle-même en scène dès le début du film. Cette 
            réutilisation des codes du reportage de guerre, du journalisme dit de terrain, permet 
            alors à Jocelyne Saab de s&apos;introduire dans le film à la fois comme une personne 
            qualifiée, légitime à évoquer un conflit armé, mais également à se présenter au 
            spectateur à travers son discours. Elle déjoue alors les codes stricts de la télévision 
            et du reportage en associant à cette image de reporter de guerre un discours 
            personnalisé, à la première personne, évoquant des expériences personnelles et 
            intimes et surtout en emmenant le spectateur dans sa propre maison, bombardée 
            par l&apos;Etat Israélien. Dès lors, la réalisatrice s&apos;affranchit des normes télévisuelles et 
            s&apos;affirme en tant qu'auteure documentaire. L&apos;ensemble de la lecture du film à suivre 
            sera alors emprunt de la subjectivité de sa réalisatrice qui a, dès les premières 
            minutes, partagé son vécu et son lien très intime avec le sujet qu&apos;elle expose au 
            public. 

            La réalisatrice impose un regard, guide le spectateur à l&apos;aide de son point de 
            vue ambivalent : celui d&apos;une femme libanaise victime des bombardements et d&apos;une 
            auteure militante.
        </p>

        <blockquote className="text-justify border-l-4 border-green-700 pl-4 italic text-gray-600 my-8">
           
            “Au fond c&apos;est pas grave, parce que ce n&apos;est que des murs, nous sommes tous sortis 
            vivants. À penser le nombre de morts qu&apos;il y a depuis quelques jours, d&apos;une part à cause des 
            bombardements des Israéliens, à cause des bagarres intérieures… je sais pas je me pose 
            des questions, l'essentiel c&apos;est de survivre, de vivre. ” 
        </blockquote>

        <p className="text-justify mb-4">
            Jocelyne Saab, alors dans sa maison en ruine, ouvre le récit à l&apos;ensemble des habitants de Beyrouth. 
            Elle opère, dans la mise en scène de sa parole de témoin, à un basculement du registre de témoignage en 
            créant une ouverture vers un témoignage qui semble plus global, un témoignage collectif. Après cette séquence, 
            plus jamais Jocelyne Saab n&apos;apparaitra à l&apos;écran, on peut alors se dire naturellement, que son témoignage 
            n&apos;existe plus, qu&apos;il est clos. Dans tout le reste du film, elle offre sa caméra au peuple libanais sans 
            jamais se mettre elle-même en avant, elle devient outil porte-parole de celles et ceux qu&apos;elle filme. 

        </p>

        <p className="text-justify mb-4">
            Dans le film, nombreux sont les personnages qui apparaissent, existent. Pourtant rarement voire presque jamais,
            ils ne s'expriment à la caméra. Rarement ils ne parlent, s&apos;adressent et donc témoignent par la parole. On peut
            alors se demander si leur présence relève vraiment du témoignage, peut-être n&apos;est-ce simplement qu&apos;une démonstration 
            dans le sens où ils sont montrés au spectateur. A mon sens, on peut considérer chaque présence, dans le film, 
            d&apos;un personnage vivant comme un témoignage. 

        </p>

        <p className=" text-justify mb-4">
            Le propos soutenu par Jocelyne Saab est le suivant : La vie continue à Beyrouth, le peuple libanais est toujours 
            vivant. Dès lors chaque habitant qui se fait filmer dans la ville témoigne en faveur du propos de la réalisatrice,
            il est une preuve du caractère vivant de la ville de Beyrouth. Souvent les habitants discutent entre eux, s&apos;amusent, 
            les voix persistent et sont captées par la caméra de Jocelyne Saab, bien que le son lui ne saisisse pas ces éléments. 
            Ce témoignage qu&apos;on qualifie jusque là de “collectif” apparaît désormais comme un simple reflet, une image miroir du 
            témoignage personnel de Jocelyne Saab, qui persiste à dire que la vie continue. A travers cette mise en scène de la 
            multiplicité des “existences-témoins” filmées, Jocelyne Saab parvient à transmettre, dans l&apos;ensemble de son œuvre, 
            son propre témoignage. Au-delà de ces images, c&apos;est la voix-off, très littéraire, interprétée par Roger Assaf qui 
            appuie le propos de Jocelyne Saab. Dans une forme, encore une fois, proche des codes du reportage, elle complète l&apos;image mais, 
            dans son contenu, prend à contrepied les motifs de la télévision. Elle y ajoute un commentaire plus poétique, et surtout
            plus engagé, à l&apos;instar de l'œuvre globale de la réalisatrice.

        </p>
        
        <h2 className="text-justify text-2xl font-semibold mt-10 mb-4 text-gray-900">
          Filmer le vivant, une mise en scène à contre-pied du témoignage de guerre formaté par le journalisme télévisé
        </h2>

         <blockquote className="text-justify border-l-4 border-green-700 pl-4 italic text-gray-600 my-8">
           “ On a trop dit l&apos;horreur et la dévastation, trop raconté la mort qui s'abattait sur nous et qui venait d&apos;ailleurs. 
           Les guerres, les images, ce qu&apos;on retient c&apos;est tout ce qui exprime la présence d&apos;un ennemi, ses crimes, ses images projetées sur la ville. 
            Toutes ces images de la mort tellement superposées qu&apos;on ne voyait plus les hommes accrochés à la vie.” 
        </blockquote>

        <p className="text-justify mb-4">
            Jocelyne Saab ne cesse de réutiliser des codes du reportages de guerre. Cependant il y a une chose qui est radicalement opposée aux 
            motifs télévisuels : le choix de filmer la vie dans la guerre. Dès le début de son film, la réalisatrice qui filme alors sa maison en
            ruine, laisse au son l&apos;existence d&apos;une ville animée et bruyante, avec des sons de voitures, des klaxons, des voix, tous diégétiques.
            On devine d&apos;ailleurs, dès le titre du film “Beyrouth, ma ville” que c&apos;est cet espace qui fera office de sujet du film, malgré une 
            première séquence consacrée à la maison de l&apos;auteure. Dans le film, le vivant est omniprésent, les corps bougent dans l&apos;espace, se 
            déplacent, et souvent même s&apos;amusent, jouent ensemble, pratiquent le jardinage ou le commerce. C&apos;est donc une vie commune, banale, 
            qui est mise en scène par Jocelyne Saab, dans laquelle des éléments viennent perturber la lecture du spectateur et lui rappeler le 
            contexte dans lequel cet ensemble de personnages évolue. On voit parfois des enfants avec des armes, souvent des militaires, et 
            systématiquement des débris. Le contraste entre la banalité de la vie et les motifs de la guerre donnent alors au spectateur une
            sensation de malaise, notamment lorsqu&apos;on voit des enfants s&apos;amuser, jouer ensemble et d&apos;autres porter un fusil. Ce contraste n&apos;est
            jamais montré à la télévision, et la réalisatrice semble l&apos;avoir compris, d&apos;où probablement la nécessité pour elle de le mettre en avant.
        </p>

        <blockquote className="text-justify border-l-4 border-green-700 pl-4 italic text-gray-600 my-8">
            “Tout ce qui est vide est plein, c&apos;est ça la guerre” 
        </blockquote>

        <p className="text-justify mb-4">
            Une guerre se compose d'êtres humains, d'êtres vivants, dont la plus grande majorité ne sont que des victimes, d'où l'importance de les
             filmer, de les montrer, de les faire témoigner. Cette phrase justifie le choix de filmer le vivant au milieu des débris, de la ville rasée 
             qui serait ici “le vide”. La séquence à 13:46 devient alors un panorama de cette vie dans la ville rasée, où les gens s&apos;amusent, échangent,
              résistent. Il y a quelque chose qui relève de la beauté dans l&apos;idée de filmer le vivant peu importe le contexte, permettant au sein du film 
              pourtant grave, l&apos;essor d&apos;un ton optimiste, du registre de l&apos;espoir qui naît du vivant résistant. On pourrait d'ailleurs résumer cette lecture
              optimiste synonyme d&apos;espoir dans une anecdote que raconte la voix off : 
        </p>

         <blockquote className="text-justify border-l-4 border-green-700 pl-4 italic text-gray-600 my-8">
            “Quand on demandait comment ça va, on avait pris l&apos;habitude de répondre d&apos;un air narquois, toujours vivant.” 
        </blockquote>

        <h2 className="text-justify text-2xl font-semibold mt-10 mb-4 text-gray-900">
            Comment témoigner de l&apos;atrocité du massacre, raconter la guerre, les morts de la façon la plus juste ? 
        </h2>


         <p className="text-justify mb-4">
            Tout au long de son film, Jocelyne Saab semble donc refuser de filmer la mort, où quand elle le fait, elle rappelle que la mort était, auparavant, 
            du vivant. Il y a alors une utilisation constante du motif de la mémoire, à travers la voix off qui rappelle des souvenirs ou encore des images
            d&apos;archives. C&apos;est le cas dans la séquence évoquant la mémoire d&apos;un jeune homme prénommé Karim, mort sous les bombardements. Dans cette séquence 
            faisant office de témoignage posthume on rappelle qui il était de son vivant plutôt que de raconter sa mort.
            Comment témoigner de l&apos;atrocité de la guerre ? En effet, raconter la guerre, le massacre, semble périlleux. Ici la réalisatrice, en mettant en scène l&apos;archive 
            au sein de ces propres images, parait rappeler au spectateur qu&apos;une guerre ne se raconte pas, son horreur n&apos;est pas définissable, et raconter le massacre 
            ne peut-être juste. Lors du passage des archives, il n&apos;y a aucune voix, empêchant alors toute forme de narration et imposant l&apos;idée que l&apos;horreur ne se 
            raconte pas et, par conséquent, ne peut être quantifier. Elle choisit de montrer le caractère ultra-violent des bombardements en filmant les victimes.
            Bien que l&apos;on dit que ce sont les vainqueurs qui écrivent l&apos;histoire, qui la raconte, Jocelyne Saab raconte la guerre sans qu&apos;il n&apos;y est de gagnant, 
            cependant elle procède à une désinvisibilisation des victimes, et humanise alors la guerre et le massacre, à l'encontre du format télévisuel qui se cantonne 
            à filmer débris et bombardements en plan larges, comme dans les premiers archives aperçus dans la même séquence.
         </p>

        <p className="text-justify mb-4">
            La mort chez Jocelyne Saab apparaît alors comme brut de toute narration, et sans cesse la vie lui est associée, comme pour rappeler au spectateur
             l&apos;importance de chaque vie ôtée par la guerre.

        </p>

        <p className="text-justify mb-4">

             Jocelyne Saab, avec son film Beyrouth, Ma Ville, permet alors à tout un peuple de témoigner sa résistance. En se réappropriant les codes du monde du 
             journalisme, la réalisatrice libanaise insuffle à son film une justesse rare et légitimise l&apos;importance de son discours alarmiste. La situation à 
             Beyrouth est grave, et Jocelyne Saab le montre, sans jamais oublier les vivants qui résistent et permettent à la ville d'être toujours debout. La
              multiplicité des témoignages au sein du film donnent alors lieu à une lecture complexe de l'œuvre, où s'entremêlent personnages et histoires mais 
              toujours actifs comme reflet du témoignage personnel et intime de son auteure, Jocelyne Saab, témoin majeure de son propre film.
        </p>



        {/* Bouton retour */}
        <div className="mt-10 text-center">
          <Link
            href="/articles"
            className="inline-block bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition"
          >
            ← Retour aux articles
          </Link>
        </div>
      </article>
    </main>
  );
}
