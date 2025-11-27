import { useEffect, useState } from "react";
import { GetProfile } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const res = await GetProfile();
      console.log("Profile Response:", res);

      if (res.success && res.user) {
        setUser({
          name: res.user.name,
          email: res.user.email,
        });
      } else {
        toast.error(res.message || "Failed to fetch profile");
      }
    } catch (err) {
      toast.error("Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const generateUsername = (name) =>
    name ? name.toLowerCase().replace(/\s+/g, "") : "";

  if (loading)
    return <p className="text-center mt-10 text-gray-700">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile Details</h2>

        <div className="flex flex-col gap-3 text-gray-700">
          <p>
            <span className="font-semibold">Name:</span> {user.name}
          </p>

          <p>
            <span className="font-semibold">Username:</span>{" "}
            {generateUsername(user.name)}
          </p>

          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
