const express = require("express");
const toDoController = require("../controller/ToDoController");
const route = express.Router();

route.get("/", toDoController.get);
route.post("/add", toDoController.add);
route.put("/update/:id", toDoController.edit);
route.delete("/del/:id", toDoController.del);

module.exports = route;
