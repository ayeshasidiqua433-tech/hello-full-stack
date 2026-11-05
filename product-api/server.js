const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello! Mera pehla Express server chal raha hai 🚀");
});

// Server start
app.listen(PORT, () => {
  console.log(`Server chal raha hai: http://localhost:${PORT}`);
});