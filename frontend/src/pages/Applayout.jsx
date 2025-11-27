import Header from "../components/Header";
import NewTask from "../components/NewTask";
import TaskBox from "../components/TaskBox";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { GetAllTask, UpdateTaskById } from "../api";
import { notify } from "../utils";

export default function AppLayout() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [copyTasks, setCopyTasks] = useState("");
  const [updateTask, setUpdateTask] = useState(null);

  const fetchAllTask = async () => {
    try {
      const { data } = await GetAllTask();
      setTasks(data);
      setCopyTasks(data);
    } catch (err) {
      console.log(err);
      notify("Failed to create task", "error");
    }
  };

  const handleUpdateItem = async (id, isDone, taskName) => {
    const obj = {
      taskName,
      isDone: isDone,
    };
    try {
      const { success, message } = await UpdateTaskById(id, obj);
      if (success) {
        notify(message, "success");
      } else {
        notify(message, "error");
      }
      fetchAllTask();
    } catch (err) {
      console.error(err);
      notify("Failed to update task", "error");
    }
  };

  useEffect(() => {
    if (updateTask) {
      setInput(updateTask.taskName);
    }
  }, [updateTask]);

  useEffect(() => {
    fetchAllTask();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-200 to-green-500 flex flex-col py-3 px-3 md:px-6 lg:py-5 lg:px-15 xl:py-6 xl:px-25 2xl:px-35">
      <Header copyTasks={copyTasks} setTasks={setTasks} />
      <NewTask
        input={input}
        setInput={setInput}
        fetchAllTask={fetchAllTask}
        handleUpdateItem={handleUpdateItem}
        updateTask={updateTask}
        copyTasks={copyTasks}
        setTasks={setTasks}
      />
      <div className="flex-1 flex-col p-4  bg-white shadow-lg rounded-xl ">
        <TaskBox
          tasks={tasks}
          fetchAllTask={fetchAllTask}
          setUpdateTask={setUpdateTask}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
      />
    </div>
  );
}
