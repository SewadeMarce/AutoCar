import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema(
{
name: { type: String, required: true, trim: true },
email: { type: String, required: true, unique: true, lowercase: true },
phone: { type: String, required: true },
role: { type: String, enum: ["user", "admin"], default: "user" },
isActive: { type: Boolean, default: true },
joinDate: { type: Date, default: Date.now },
password: { type: String, required: true, minlength: 6, select: false },
},
{ timestamps: true }
);


// Hash du mot de passe avant save si modifié
userSchema.pre("save", async function (next) {
if (!this.isModified("password")) return next();
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
next();
});


// Méthode d'instance pour comparer
userSchema.methods.comparePassword = async function (candidate) {
return bcrypt.compare(candidate, this.password);
};


// Nettoyage JSON (ne jamais renvoyer password)
userSchema.set("toJSON", {
transform: function (doc, ret) {
delete ret.password;
return ret;
},
});


export default mongoose.model("User", userSchema);