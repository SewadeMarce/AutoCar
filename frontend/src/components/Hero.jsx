import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200"
          alt="Luxury Car"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            LUXURY<br />
            LIFESTYLE<br />
            RENTALS
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Enjoy the most luxurious experience
          </p>
          <Link
            to="/gallery"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-semibold"
          >
            DISCOVER
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;