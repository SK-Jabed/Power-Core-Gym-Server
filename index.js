require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Power Core Gym Server is Running");
});

app.listen(port, () => {
  console.log(`Power Core Gym Server is Running on Port: ${port}`);
});
