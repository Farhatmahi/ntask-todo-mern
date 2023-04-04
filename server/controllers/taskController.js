const Task = require("../models/TaskModel");

const addTask = async (req, res) => {
  try {
    const { email, task_name, description, due_date } = req.body;

    if (!task_name || !description || !due_date) {
      return res.status(500).send({ message: "Please enter all fields" });
    }

    const newTask = await Task.create({
      email,
      task_name,
      description,
      due_date,
    });

    return res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send({ message: "Error in catch block" });
  }
};

const allTasks = async (req, res) => {
  try {
    const email = req.query.email;
    const tasks = await Task.find({ email: email });
    // console.log(tasks)
    return res.status(200).send(tasks);
  } catch ({ error }) {
    res.status(500).send({ message: "Error in catch block" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const email = req.query.email;
    const id = req.params.id;
    await Task.findOneAndDelete({ _id: id });
    const tasks = await Task.find({ email: email });
    res.status(200).send(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const editTask = async(req, res) => {}

module.exports = { addTask, allTasks, deleteTask };
