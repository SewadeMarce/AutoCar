import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });
  const { user, register, login, loading, message } = useAuth();


  async function handleSubmit(e) {
    e.preventDefault();
    try {

      if (isLogin) {
        await login(formData);

      } else {
        await register(formData);

      }


    } catch (err) {

      console.error(err);

    }

  };

  return (
    <div className="bg-black text-white min-h-screen pt-16 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Connexion' : 'Inscription'}
        </h2>
        <h2 className={`text-2xl font-bold mb-6 text-center ${user ? "text-green-500" : "text-red-500"} `}>
          {message}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (<>
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />  <input
              type="tel"
              placeholder="Tel"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded"
              value={formData.tel}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </>)}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button

            disabled={!loading}
            type="submit"
            className={`w-full h2 ${!loading ? " bg-yellow-200 animate-pulse" : " bg-yellow-400"} text-black py-3 rounded font-semibold hover:bg-yellow-500 transition-colors`}
          >
            {!loading ? "...." : isLogin ? 'Se connecter' : 'S\'inscrire'}

          </button>
        </form>

        <p className="text-center mt-4">
          {isLogin ? "Pas de compte ? " : "Déjà un compte ? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-400 hover:text-yellow-300"
          >
            {isLogin ? "S'inscrire" : "Se connecter"}
          </button>
        </p>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <Link to="/admin/login" className="text-red-400 hover:text-red-300 text-sm">
            Accès administrateur
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login