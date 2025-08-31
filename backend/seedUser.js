import mongoose from "mongoose";
import User from "./src/models/User.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();


const rawUsers = [
    {
        name: "John Doe",
        email: "john@example.com",
        phone: "+971 123 456 789",
        role: "user",
        isActive: true,
        joinDate: "2024-01-15",
        password: "password123",
    },
    {
        name: "Admin User",
        email: "admin@autocar.com",
        phone: "+971 987 654 321",
        role: "admin",
        isActive: true,
        joinDate: "2023-12-01",
        password: "admin12345",
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+971 555 123 456",
        role: "user",
        isActive: false,
        joinDate: "2024-02-01",
        password: "secret456",
    },
];


(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);


        await User.deleteMany();


        // Hash en parallèle
        const users = await Promise.all(
            rawUsers.map(async (u) => ({
                ...u,
                password: await bcrypt.hash(u.password, 10),
            }))
        );


        await User.insertMany(users);
        console.log("✅ Users seeded successfully");
        await mongoose.connection.close();
    } catch (err) {
        console.error("❌ Seed error:", err);
        process.exit(1);
    }
})();