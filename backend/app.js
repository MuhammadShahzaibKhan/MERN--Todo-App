require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const ToDoRoute = require("./routes/ToDoRoute");
const cors = require("cors");

const App = express();
App.use(express.json());
App.use(cors());

App.use("/todos", ToDoRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    App.listen(process.env.PORT, () => {
      console.log(
        `Server is listening on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("err ===>", err);
  });
