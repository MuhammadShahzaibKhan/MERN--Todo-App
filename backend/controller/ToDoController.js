const ToDoModel = require("../models/ToDoModel");
const { SendResponse } = require("../helpers/helpers");

const toDoController = {
  add: (req, res) => {
    try {
      const { toDo } = req.body;
      ToDoModel.create({ toDo }).then((data) => {
        console.log("Saved todo successfully");
        res
          .status(200)
          .send(SendResponse(true, "Todo added successfully", data));
      });
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal Server Error", e));
    }
  },
  get: async (req, res) => {
    try {
      let todo = await ToDoModel.find();
      res.status(200).send(SendResponse(true, "", todo));
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal Server Error", e));
    }
  },
  edit: async (req, res) => {
    try {
      let id = req.params.id;
      let todo = await ToDoModel.findByIdAndUpdate(id, req.body);
      res
        .status(200)
        .send(SendResponse(true, "todo updated successfully", todo));
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal Server Error", e));
    }
  },
  del: (req, res) => {
    try {
      let id = req.params.id;
      ToDoModel.findByIdAndDelete(id).then(() => {
        res.status(200).send(SendResponse(true, "todo deleted successfully"));
      });
    } catch (e) {
      res.status(400).send(SendResponse(false, "Bad request", e));
    }
  },
};

module.exports = toDoController;
