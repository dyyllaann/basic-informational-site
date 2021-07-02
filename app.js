const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "index.html"));
});

app.get("/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "about.html"));
});

app.get("/contact-me.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "contact-me.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
