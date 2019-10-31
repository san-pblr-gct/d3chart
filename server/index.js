const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/todos/all", async (req, res) => {
  const todos = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log(todos);
  console.log(todos.data);
  res.send(todos.data);
});

app.listen(5000, err => {
  console.log("Listening");
});
