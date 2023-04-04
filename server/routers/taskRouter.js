const express = require("express");
const {
  allTasks,
  addTask,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();

router.get("/", allTasks);
router.post("/", addTask);
router.delete("/:id", deleteTask);

module.exports = router;
