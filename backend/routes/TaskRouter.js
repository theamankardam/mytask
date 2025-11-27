const router = require("express").Router();
const {
  createTask,
  fetchAllTasks,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/TaskController");

const authMiddleware = require("../middleware/AuthMiddleware");

router.get("/", authMiddleware, fetchAllTasks);
router.post("/", authMiddleware, createTask);
router.put("/:id", authMiddleware, updateTaskById);
router.delete("/:id", authMiddleware, deleteTaskById);

module.exports = router;
