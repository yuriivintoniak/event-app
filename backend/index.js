const express = require("express");
const app = express();
const cors = require("cors");
const events = require("./db.js");

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/events", (req, res) => {
  res.send(events.getEvents());
});

app.post("/register", (req, res) => {
  const participant = {
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
  };
  res.send(participant);
});

app.get("/participants", (req, res) => {
  res.send("Hello from participants");
});

app.listen(4000, () => {
  console.log("Server is working...");
});
