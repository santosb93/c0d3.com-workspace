/*Depending on which browser, display hello world in red or blue (chrome vs firefox)*/
const express = require("express");
const app = express();

const setColor = (browser = "UNKNOWN") => {
  let color = "#000000";
  if (browser === "chrome") color = "#0000FF";
  else if (browser === "firefox") color = "#FF0000";
  return `
    <style>
    h1 {
      color: ${color};
      }
    </style>
      <h1>Welcome ${browser} user</h1>
  
  `;
};

app.get("/browser", (req, res) => {
  const browserString = req.get("User-Agent").toUpperCase();
  if (browserString.includes("CHROME")) {
    res.send(setColor("chrome"));
  } else if (browserString.includes("FIREFOX")) {
    res.send(setColor("firefox"));
  }
  res.send(setColor());
});

app.listen(3000);
