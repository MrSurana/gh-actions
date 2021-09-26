const express = require("express");
const uuid = require("uuid");

const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  res.send("Hello world! " + uuid.v4());
});

app.listen(port, () =>
  console.log(`Express server listening on http://localhost:${port}`)
);
