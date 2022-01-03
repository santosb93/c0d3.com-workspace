/*
GetFile: Create a file with the file name hello. Create a get path called 
/getfile that sends back the file. 
Hint: you need to use node's fs and then fs.readFile to read the contents of the file.*/
const express = require("express");
const fs = require("fs");
const app = express();

app.get("/getfile", (req, res) => {
  fs.readFile("hello.txt", "utf8", (err, data) => {
    res.send(data);
  });
});

app.listen(3000);
