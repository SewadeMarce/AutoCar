// Page de connexion admin dédiée
const AdminLoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Vérification des identifiants admin (simulation)
    if (formData.email === 'admin@autocar.com' && formData.password === 'admin123') {
      onLogin({
        name: 'Administrateur',
        email: formData.email,
        role: 'admin',
        id: 999
      });
      navigate('/admin');
    } else {
      setError('Identifiants administrateur incorrects');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md border border-red-500/30">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔐</span>
          </div>
          <h2 className="text-2xl font-bold">Connexion Admin</h2>
          <p className="text-gray-400 text-sm mt-2">Accès réservé aux administrateurs</p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email administrateur"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded border border-gray-700 focus:border-red-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded border border-gray-700 focus:border-red-500 outline-none"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition-colors"
          >
            Se connecter en tant qu'admin
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="text-gray-400 hover:text-white text-sm">
            Connexion utilisateur normale
          </Link>
        </div>

        <div className="mt-4 p-3 bg-gray-800 rounded text-xs">
          <p className="text-gray-400">Identifiants de démonstration :</p>
          <p className="text-white">Email: admin@autocar.com</p>
          <p className="text-white">Mot de passe: admin123</p>
        </div>
      </div>
    </div>
  );
};
