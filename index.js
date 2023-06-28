require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;

const dbRoutes = require("./src/routes/dbRoute");

const app = express();

// middleware
app.use(express.json());

// Routes
app.use("/mahasiswa", dbRoutes);

// listen server
app.listen(3002, () => console.log('Server: http://localhost:3002'))

