import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/signup", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <section className="bg-linear-to-br from-green-100 to-green-300 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 lg:p-10 max-w-md w-full sm:w-11/12 md:w-96 ">
        <h1 className="text-xl font-bold text-gray-900 mb-2 text-center">
          Welcome to <span className="text-green-600">myTask 🗂️</span>
        </h1>
        <p className="text-sm text-gray-600 mb-5 text-center">
          Join us & start managing your dashboard
        </p>

        <form onSubmit={handleSignup} className="flex flex-col gap-4 mb-4">
          <div className="relative">
            <label className="block mb-1 font-medium text-sm">Full Name</label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="current-password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-150"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block mb-1 font-medium text-sm">Email</label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="current-password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-150"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block mb-1 font-medium text-sm">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-150"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="cursor-pointer w-full bg-linear-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-medium shadow hover:from-green-600 hover:to-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer text-blue-500 font-semibold hover:underline"
          >
            Log In
          </span>
        </p>
      </div>
    </section>
  );
}
