require("dotenv").config();
const express = require("express");
const areaRouter = require("./routes/area.route");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(areaRouter);

app.use("*", (req, res) => {
  res.send(`<h2>not a valid request</h2>`);
});

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
