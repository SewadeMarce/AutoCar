import { Link } from "react-router-dom";

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mr-2">
            <span className="text-sm font-bold">AC</span>
          </div>
          <span className="font-bold text-xl">AUTOCAR</span>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-400 mb-4">UAE - Dubai</p>
          <p className="text-gray-400 mb-2">+971 21 658 369</p>
          <p className="text-gray-400">info-car@gmail.com</p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
            <span className="text-sm">f</span>
          </div>
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
            <span className="text-sm">@</span>
          </div>
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
            <span className="text-sm">t</span>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 <Link to="/" className="text-yellow-400 hover:text-yellow-300">Cars</Link>
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Développé par <span className="text-yellow-400">Eng.Angham Alhamwi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;