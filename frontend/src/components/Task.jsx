import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaTrash } from "react-icons/fa";

export default function Task({
  taskName,
  isDone,
  id,
  handleDeleteTask,
  handleCheckAndUncheck,
  setUpdateTask,
}) {
  return (
    <div
      className="m-2 p-4 bg-white/80 backdrop-blur-sm border border-gray-200 
      rounded-xl flex justify-between items-center shadow-sm 
      hover:shadow-md transition"
    >
     
      <span
        className={`text-sm md:text-base font-medium ${
          isDone ? "line-through text-green-600/70" : "text-gray-900"
        }`}
      >
        {taskName}
      </span>

      
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleCheckAndUncheck(id, isDone, taskName)}
          className="cursor-pointer flex items-center justify-center rounded-lg
          bg-linear-to-r from-emerald-500 to-emerald-700 
          text-white hover:scale-105 active:scale-95 transition p-2 shadow"
        >
          <FaCheck size={14} />
        </button>

        
        <button
          onClick={() => setUpdateTask({ id, isDone, taskName })}
          className="cursor-pointer flex items-center justify-center rounded-lg
          bg-linear-to-r from-blue-500 to-blue-700 
          text-white hover:scale-105 active:scale-95 transition p-2 shadow"
        >
          <FaPencil size={14} />
        </button>

        
        <button
          onClick={() => handleDeleteTask(id)}
          className="cursor-pointer flex items-center justify-center rounded-lg
          bg-linear-to-r from-red-500 to-red-700 
          text-white hover:scale-105 active:scale-95 transition p-2 shadow"
        >
          <FaTrash size={14} />
        </button>
      </div>
    </div>
  );
}
