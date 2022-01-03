const express = require("express");
const app = express();
let numVisited = 0;

app.get("/count", (req, res) => {
  res.send(`<h1>This page has been visited ${++numVisited} times</h1>`);
});

app.listen(3000);
