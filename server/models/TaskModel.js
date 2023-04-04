const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  email: { type: String, required: true },
  task_name: { type: String, required: true },
  description: { type: String },
  due_date: { type: String, required: true },
  priority: { type: String },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
