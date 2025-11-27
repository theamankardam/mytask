import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router";
import { FiUser } from "react-icons/fi";

export default function Header({ setTasks, copyTasks }) {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    const results = copyTasks.filter((item) =>
      item.taskName.toLowerCase().includes(term)
    );
    setTasks(results);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  return (
    <nav
      className="flex items-center justify-between px-4 py-3 mb-3 
      bg-white/80 backdrop-blur-md shadow-lg rounded-xl border border-gray-200"
    >
      <div
        className="px-3 py-1 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-700 
text-white font-semibold text-lg shadow-lg tracking-wide hover:scale-105 transition-all duration-300"
      >
        <span className="md:hidden">Mt</span>
        <span className="hidden md:block">myTask</span>
        
      </div>

      <div
        className="flex items-center gap-2 border border-gray-300 bg-gray-50/70 
        px-3 py-2 rounded-lg w-full mx-4 
        focus-within:shadow-md transition"
      >
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full bg-transparent text-sm outline-none text-gray-700"
          onChange={handleSearch}
        />
      </div>

      <button
        onClick={() => navigate("/profile")}
        className=" cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg p-2 lg:text-2xl
        bg-green-50 text-green-700 text-xl shadow 
        hover:bg-green-100 hover:shadow-md transition"
      >
        <FiUser />
      </button>

      <button
        onClick={handleLogout}
        className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg p-2
        bg-red-50 text-red-600 text-xl lg:text-2xl shadow ml-2
        hover:bg-red-100 hover:shadow-md transition"
      >
        <TbLogout2 />
      </button>
    </nav>
  );
}
