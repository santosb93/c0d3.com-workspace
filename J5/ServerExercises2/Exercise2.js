const express = require("express");
const app = express();

app.options("/api/*", (req, res) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Credentials"
  );
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.send("<h1>Okay</h1>");
});

app.listen(3000);
