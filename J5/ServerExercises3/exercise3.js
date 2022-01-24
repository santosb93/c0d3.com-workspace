const express = require("express");
const app = express();

// create an array for users
const users = [];

// create a get method for path online
app.get("/online", (req, res) => {
  const thisUser = req.query.name;
  // if query is falsy send a 401 response, Please set a query params with name as the key and your name as the value
  if (!thisUser) {
    return res
      .status(401)
      .send(
        "Please set a query params with name as the key and your name as the value"
      );
  }
  users.push(thisUser);
  res.send(
    `<body>
    <H1> Welcome ${thisUser} </H1>
    <p> Open this page in another tab, use a different name! </p>
    <div class = "otherUsers"></div>
     </body>
    <script>
    const otherUsers = document.querySelector('.otherUsers');
    const render = (thisData) => {
      otherUsers.innerHTML = thisData.reduce((acc, user) => {
        return acc + '<h2>' + user + '</h2>';
        return acc;
      }, "");

    }
    const getData = () => {
      fetch("http://localhost:3000/users?name=${thisUser}")
      .then(r => r.json())
      .then(data => {
        render(data);
      })
      setTimeout(getData, 1000);
    }
    getData();
    </script>
     `
  );
});

app.get("/users", (req, res) => {
  const currentUser = req.query.name;
  const filteredUsers = users.filter((name) => {
    return name !== currentUser;
  });

  res.json(filteredUsers);
});

// refresh link every second?

app.listen(3000);
