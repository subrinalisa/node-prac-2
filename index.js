require("dotenv").config();
const express = require("express");
var cors = require("cors");
const areaRouter = require("./routes/area.route");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(areaRouter);

app.use("*", (req, res) => {
  res.send(`<h2>not a valid request</h2>`);
});

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
