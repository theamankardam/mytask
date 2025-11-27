const UserModel = require("../models/User");

const createTask = async (req, res) => {
  try {
    const userId = req.user._id;
    const data = req.body;

    const user = await UserModel.findById(userId);
    user.tasks.push(data);
    await user.save();

    res.status(201).json({ message: "Task is created", success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to create task", success: false });
  }
};

const fetchAllTasks = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await UserModel.findById(userId);
    const data = user.tasks;

    res.status(200).json({ message: "All Tasks", success: true, data });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get all tasks", success: false });
  }
};

const updateTaskById = async (req, res) => {
  try {
    const userId = req.user._id;
    const taskId = req.params.id;
    const body = req.body;

    const user = await UserModel.findById(userId);

    const task = user.tasks.id(taskId);
    Object.assign(task, body);
    await user.save();

    res.status(200).json({ message: "Task Updated", success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to update task", success: false });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const userId = req.user._id;
    const taskId = req.params.id;

    const user = await UserModel.findById(userId);

    user.tasks = user.tasks.filter((t) => t._id.toString() !== taskId);
    await user.save();

    res.status(200).json({ message: "Task is deleted", success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete task", success: false });
  }
};

module.exports = {
  createTask,
  fetchAllTasks,
  updateTaskById,
  deleteTaskById,
};
