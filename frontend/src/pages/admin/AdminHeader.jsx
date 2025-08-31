// Header Admin avec navigation
const AdminHeader = ({ user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <header className="bg-red-900/90 backdrop-blur-sm text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/admin" className="flex items-center space-x-2">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">AC</span>
            </div>
            <span className="font-bold text-xl">ADMIN</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/admin" className="hover:text-yellow-400 transition-colors">Dashboard</Link>
            <Link to="/admin/cars" className="hover:text-yellow-400 transition-colors">Voitures</Link>
            <Link to="/admin/orders" className="hover:text-yellow-400 transition-colors">Commandes</Link>
            <Link to="/admin/users" className="hover:text-yellow-400 transition-colors">Utilisateurs</Link>
            <Link to="/admin/analytics" className="hover:text-yellow-400 transition-colors">Analytics</Link>
            <Link to="/admin/settings" className="hover:text-yellow-400 transition-colors">Paramètres</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/" className="text-sm hover:text-yellow-400 transition-colors">
              Voir le site
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 hover:text-yellow-400"
              >
                <User className="w-6 h-6" />
                <span className="hidden md:block">{user?.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-2">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors text-red-400"
                  >
                    Se déconnecter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
