/**
 * When users visit /messages, they should see a list of messages. They can also add messages.
 *  When server restarts, you must not lose your data. Since you did not learn how to handle request
 *  body on the server, send the data in the url query parameter.
 */

const fs = require("fs");
const express = require("express");
const app = express();
const noteFile = "./exercise2notes";
const maxNotes = 5;
let notes = [];
fs.readFile(noteFile, (err, data) => {
  if (err) {
    return console.log("error reading file");
  }

  const str = data.toString();
  if (str) {
    notes = JSON.parse(str);
  }
});

app.get("/messages", (req, res) => {
  const notesString = notes.reduce((acc, e) => {
    return (acc += `<h1>${e}<h1>`);
  }, "");
  res.send(`
  <body>
    ${notesString}
    <div class="notes"></div>
    <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
    <button class="submit">Submit</button>
  </body>
  <script>
  const btnSubmit = document.querySelector(".submit");
  const input = document.querySelector(".input");
  btnSubmit.addEventListener("click", () => {
    const inputValue = input.value;
    if (!inputValue) {
      alert("Please enter a valid input");
      return;
    }
    fetch("http://localhost:3000/messages/add?content=" + inputValue);
    input.value = "";
    alert('submitted. Refreshing the page to see your message')
    window.location.reload()
  });
  </script>
  `);
});

app.get("/messages/add", (req, res) => {
  const value = req.query.content;
  if (!value) {
    return res.status(400).send("Please provide a content query parameter");
  }
  if (notes.length >= maxNotes) notes.pop();
  notes.unshift(value);
  fs.writeFile(noteFile, JSON.stringify(notes), () => {});
});

app.listen(3000);
