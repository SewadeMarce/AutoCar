import { verifyToken } from "../utils/jwt.js";
import User from "../models/User.js";


export const protect = async (req, res, next) => {
    try {
        let token;
        const auth = req.headers.authorization;
        if (auth && auth.startsWith("Bearer")) {
            token = auth.split(" ")[1];
        }
        if (!token) return res.status(401).json({ message: "Non autorisé" });


        const decoded = verifyToken(token); // { id, role, iat, exp }
        const user = await User.findById(decoded.id);
        if (!user) return res.status(401).json({ message: "Utilisateur inexistant" });


        req.user = user; // attaché à la requête
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token invalide ou expiré" });
    }
};


export const requireRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Accès refusé" });
        }
        next();
    };
};