const express = require("express");
const {
  allTasks,
  addTask,
  deleteTask,
  editTask,
} = require("../controllers/taskController");
const router = express.Router();

router.get("/", allTasks);
router.post("/", addTask);
router.delete("/:id", deleteTask);
router.put("/update", editTask);

module.exports = router;
