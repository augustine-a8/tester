const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

app.listen(4040, () => {
  console.log("server running on port 4000");
});
