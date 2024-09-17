const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Kana:dRzxneXIG1DCj6yP@cluster0.exu00.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => console.log("DB conected!"))
  .catch((err) => console.log(err));

const app = express();

app.get("/projects", function (req, res) {
  res.json({ success: true });
});

const PORT = process.env.PORT || "3001";

app.listen(PORT, function () {
  console.log("I am runninig!");
});
