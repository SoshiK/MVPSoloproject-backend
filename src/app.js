const express = require("express");
const app = express();

//JSONペイロードで受信したリクエストを解析
app.use(express.json());

app.get("*", (req, res) => {
  res.send("hello");
})
module.exports = app;