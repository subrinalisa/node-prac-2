require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.post("/circle", (req, res) => {
  const { radius } = req.body;
  const area = Math.PI * radius * radius;
  res.send(`<h2>Area of circle is ${area}</h2>`);
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.post("/triangle", (req, res) => {
  const { base, height } = req.body;
  const area = 0.5 * base * height;
  res.send(`<h2>Area of triangle is ${area}</h2>`);
});
app.get("/demo/:id([0-9]+)", (req, res) => {
  const { id } = req.params;
  res.send(`<h2>You Requested at ID ${id}</h2>`);
});
app.use("*", (req, res) => {
  res.send(`<h2>not a valid request</h2>`);
});
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
