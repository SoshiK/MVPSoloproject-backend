const express = require("express");
const app = express();
const db = require("./knex");
const cors = require("cors");

//JSONペイロードで受信したリクエストを解析
app.use(cors());
app.use(express.json());

//GET /api/cars
app.get("/api/cars", (req, res) => {
  db("cars")
    .join("makers", "cars.maker_id", "=", "makers.id")
    .then((result) => {
      res.send(result);
    });
});

//POST /api/cars
app.post("/api/cars", async (req, res) => {
  const data = req.body;
  const {carname, length, height, width, price, maker_id} = data;
  const result = await db("cars").insert({
    carname,
    length,
    height,
    width,
    price,
    maker_id
  });
  res.send(result.rowCount);
});

//GET /api/cars/:order
app.get("/api/cars/:order", (req, res) => {
  const order = req.params.order;
  db("cars")
    .join("makers", "cars.maker_id", "=", "makers.id")
    .orderBy(order, "asc")
    .then((result) => {
      res.send(result);
    });
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
    });
});

//GET /api/makers
app.get("/api/makers", (req, res) => {
  db("makers")
    .select()
    .then((result) => {
      res.send(result);
    })
})

app.get("*", (req, res) => {
  res.send("hello");
})
module.exports = app;