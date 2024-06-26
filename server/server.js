require("dotenv").config();
const express = require("express");
const authRoutes = require("./router/Auth-Router");
const dataRoutes = require("./router/Data-Router");
const contactRoutes = require("./router/Contact-Router");
const connectDB = require("./utils/db");
const app = express();
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
}

app.use(cors(corsOption));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/form", contactRoutes);

const PORT = 3000;

const uri = process.env.MONGODB_URI;
// const uri = "mongodb+srv://satyam_mishra_30:8016149827@cluster0.nt0kh.mongodb.net/AppData?retryWrites=true&w=majority&appName=Cluster0";
// console.log("Uri is", uri);

connectDB(uri).then(() => {
  app.listen(PORT, () => {
    console.log("Connected to Database, running on port ", PORT);
  });
});
