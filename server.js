const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({
  path: "./config.env",
});
let PORT = process.env.PORT;

app.get("/api/test", (req, res) => {
  res.send({ message: `Hello World ${PORT}` });
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
