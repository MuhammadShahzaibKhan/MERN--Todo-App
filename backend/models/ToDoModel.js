const mongoose = require("mongoose");

const ToDoSchema = mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
});

const ToDoModel = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDoModel;
