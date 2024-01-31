const areas = require("../models/area.model");
const path = require("path");

exports.getHome = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.getArea = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/triangle.html"));
};

exports.saveArea = (req, res) => {
  const { base, height } = req.body;
  const area = 0.5 * base * height;
  areas.push(area);
  res.send(`<h2>Area is ${area}</h2>`);
};
