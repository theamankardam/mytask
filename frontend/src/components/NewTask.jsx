import { CreateTask } from "../api";
import { notify } from "../utils";
import { FiPlus } from "react-icons/fi";

export default function NewTask({
  input,
  setInput,
  fetchAllTask,
  handleUpdateItem,
  updateTask,
  setTasks,
  copyTasks,
}) {
  const handleTask = () => {
    if (updateTask && input) {
      handleUpdateItem(updateTask.id, updateTask.isDone, input);
    } else if (!updateTask && input) {
      handleAddTask();
    }
    setInput("");
  };

  async function handleAddTask() {
    try {
      const { success, message } = await CreateTask({
        taskName: input,
        isDone: false,
      });

      notify(message, success ? "success" : "error");
      fetchAllTask();
    } catch (err) {
      notify("Failed to create task", "error");
    }
  }

  const handleFilter = (value) => {
    let filtered = [...copyTasks];
    if (value === "done") filtered = filtered.filter((t) => t.isDone);
    else if (value === "not-done") filtered = filtered.filter((t) => !t.isDone);
    setTasks(filtered);
  };

  return (
    <section className="flex items-center justify-center w-full mb-3">
      <div
        className="flex items-center gap-2 w-full p-3 
        bg-white/80 backdrop-blur-md shadow-lg rounded-xl 
        border border-gray-200"
      >
        <select
          className="px-2 py-2 text-sm rounded-lg 
          bg-gray-50/70 border border-gray-300 text-gray-700 
          focus:border-emerald-500 focus:ring-1 focus:ring-emerald-300
          outline-none transition"
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="done">Done</option>
          <option value="not-done">Not Done</option>
        </select>

        <input
          type="text"
          placeholder="Add task..."
          className="flex-1 px-2 py-2 text-sm rounded-lg
          bg-gray-50/70 border border-gray-300 text-gray-00
          focus:border-emerald-500 focus:ring-1 focus:ring-emerald-300
          outline-none transition"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleTask}
          className="px-3 py-2 flex items-center gap-1 rounded-lg
  bg-linear-to-r from-blue-500 to-blue-700
  text-white text-sm font-semibold shadow-lg
  hover:from-blue-600 hover:to-blue-800
  hover:shadow-xl hover:scale-105
  active:scale-95 transition-all cursor-pointer"
        >
          <FiPlus size={15} /> <span className="hidden md:block">Add</span>
        </button>
      </div>
    </section>
  );
}
