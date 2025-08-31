import User from "../models/User.js";
import { signToken } from "../utils/jwt.js";


// POST /api/auth/register
export const register = async (req, res) => {
    try {
        const { name, email, phone, password, role } = req.body;


        const exists = await User.findOne({ email });
        if (exists) return res.status(400).json({ message: "Email déjà utilisé" });


        const user = await User.create({ name, email, phone, password, role });
        const token = signToken({ id: user._id, role: user.role });


        res.status(201).json({
            message: "Inscription réussie",
            token,
            user,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// POST /api/auth/login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email et mot de passe requis" });
        }


        const user = await User.findOne({ email }).select("+password");
        if (!user) return res.status(400).json({ message: "Identifiants invalides" });


        const ok = await user.comparePassword(password);
        if (!ok) return res.status(400).json({ message: "Identifiants invalides" });


        const token = signToken({ id: user._id, role: user.role });
        const safeUser = user.toJSON();


        res.json({ message: "Connexion réussie", token, user: safeUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// GET /api/auth/me
export const me = async (req, res) => {
    try {
        // req.user est injecté par protect()
        res.json({user:req.user});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};