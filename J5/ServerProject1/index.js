const express = require("express"); //Import the express library
const app = express(); //Use the express library to create an app

app.get("/hello", (req, res) => {
  res.send("<h1> Hello World </h1>");
});

app.delete("/hello", (req, res) => {
  res.send("ok");
});

app.listen(3000);
