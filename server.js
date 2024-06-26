const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages/about.html"));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages/menu.html"));
});

app.get("/reservations", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages/reservations.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages/contact.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages/not-found.html"));
});

app.listen(3000, function () {});

module.exports.handler = serverless(app);
