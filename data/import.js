const fs = require("fs");
const db = require("../src/knex");

const makers = JSON.parse(fs.readFileSync("./makers.json"));
const cars = JSON.parse(fs.readFileSync("./cars.json"));

(async () => {
  for (const maker of makers) {
    const id = maker.id;
    const name = maker.name;
    const icon = maker.icon;
    const result = await db("makers").insert({
      id,
      name,
      icon
    });
    console.log(result);
  }

  for(const car of cars) {
    const name = car.name;
    const length = car.length;
    const height = car.height;
    const width = car.width;
    const price = car.width;
    const maker_id = car.maker_id;
    const result = await db("cars").insert({
      name,
      length,
      height,
      width,
      price,
      maker_id
    });
    console.log(result);
  }
  console.log("inserted data successfully!")
  process.exit(-1);
})();