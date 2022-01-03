//Create a get path called /delay that will send back a response only after 5 seconds
//(We are simulating a really slow response).

const express = require("express");
const app = express();

app.get("/delay", (req, res) => {
  setTimeout(() => {
    res.send("<h1> This response has been delayed by 5 secs </h1>");
  }, 5000);
});

app.listen(3000);
