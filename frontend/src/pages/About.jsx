// Page About
const About = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">À propos de nous</h1>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600"
                alt="Luxury Cars"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Excellence et Luxe</h2>
              <p className="text-gray-300 mb-6">
                Depuis plus de 15 ans, AutoCar est le leader de la location de véhicules de luxe.
                Notre passion pour l'excellence automobile nous pousse à offrir uniquement les
                meilleures voitures du marché.
              </p>
              <p className="text-gray-300">
                Que ce soit pour un événement spécial, un voyage d'affaires ou simplement
                pour le plaisir de conduire, nous mettons à votre disposition une flotte
                exceptionnelle de véhicules haut de gamme.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-400">Service de qualité supérieure avec attention aux détails</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flotte Premium</h3>
              <p className="text-gray-400">Véhicules de luxe récents et parfaitement entretenus</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction</h3>
              <p className="text-gray-400">Plus de 10,000 clients satisfaits nous font confiance</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Rendre l'expérience automobile de luxe accessible à tous, en offrant un service
              personnalisé et des véhicules d'exception pour créer des moments inoubliables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About