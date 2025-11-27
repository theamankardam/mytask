import { DeleteTaskById, UpdateTaskById } from "../api";
import { notify } from "../utils";
import Task from "./Task";

export default function TaskBox({ tasks, fetchAllTask, setUpdateTask }) {
  const handleDeleteTask = async (id) => {
    try {
      const { success, message } = await DeleteTaskById(id);
      success ? notify(message, "success") : notify(message, "error");
      fetchAllTask();
    } catch (err) {
      notify("Failed to delete task", "error");
    }
  };

  const handleCheckAndUncheck = async (id, isDone, taskName) => {
    try {
      const obj = { taskName, isDone: !isDone };
      const { success, message } = await UpdateTaskById(id, obj);
      success ? notify(message, "success") : notify(message, "error");
      fetchAllTask();
    } catch (err) {
      notify("Failed to update task", "error");
    }
  };

  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 py-10 text-sm">
          No tasks available. Add a task to get started ✨
        </p>
      ) : (
        tasks.map((items) => (
          <Task
            key={items._id}
            taskName={items.taskName}
            isDone={items.isDone}
            id={items._id}
            handleDeleteTask={handleDeleteTask}
            handleCheckAndUncheck={handleCheckAndUncheck}
            setUpdateTask={setUpdateTask}
          />
        ))
      )}
    </div>
  );
}
