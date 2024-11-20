// backend/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const admin = require("firebase-admin");

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Importar las rutas
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const postsRoutes = require("./routes/posts");

// Usar las rutas
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes); // Confirma que esta línea está presente
app.use("/posts", postsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
