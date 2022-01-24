/*
 * when user visits /delayed?time=2000, delay the welcome response by
 * the specified number of milli-seconds in the url parameter
 * */

const express = require("express");
const app = express();

app.get("/delayed", (req, res) => {
  const delayTime = req.query.time;
  setTimeout(() => {
    res.send(`<h1> Here is your response after ${delayTime}ms delay</h1>`);
  }, delayTime);
});

app.listen(3000);
