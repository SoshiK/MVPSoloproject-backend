const express = require("express");
const app = express();
const db = require("./knex");

//JSONペイロードで受信したリクエストを解析
app.use(express.json());

//GET /api/cars
app.get("/api/cars", (req, res) => {
  db("cars")
    .join("makers", "cars.maker_id", "=", "makers.id")
    .then((row) => {
      console.log(row);
    })
    res.send("success!");
});

app.get("*", (req, res) => {
  res.send("hello");
})
module.exports = app;