const express = require("express");
const app = express();
const db = require("./knex");

//JSONペイロードで受信したリクエストを解析
app.use(express.json());

//GET /api/cars
app.get("/api/cars", (req, res) => {
  db("cars")
    .join("makers", "cars.maker_id", "=", "makers.id")
    .then((result) => {
      res.send(result);
    })
});

//GET /api/cars/:order
app.get("/api/cars/:order", (req, res) => {
  const order = req.params.order;
  db("cars")
    .join("makers", "cars.maker_id", "=", "makers.id")
    .orderBy(order, "asc")
    .then((result) => {
      res.send(result);
    })
});

//GET /api/cars/selected/:maker
app.get("/api/cars/selected/:maker", (req, res) => {
  const makers = req.params.maker.split("&");
  db("cars")
    .join("makers", "cars.maker_id", "=", "makers.id")
    .where((builder) => {
      builder.whereIn("cars.maker_id", makers)
    })
    .then((result) => {
      res.send(result);
    })
})

app.get("*", (req, res) => {
  res.send("hello");
})
module.exports = app;