require("dotenv").config();
const express = require("express");
const authRoutes = require("./router/Auth-Router");
const connectDB = require("./utils/db");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Connected to Database, running on port ", PORT);
  });
});
