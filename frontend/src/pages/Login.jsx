import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      localStorage.setItem("jwtToken", res.data.jwtToken);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleGuestLogin = async () => {
    try {
      const guestEmail = "guest@example.com";
      const guestPassword = "guest123";
      const res = await axios.post("http://localhost:5000/auth/login", {
        email: guestEmail,
        password: guestPassword,
      });

      localStorage.setItem("jwtToken", res.data.jwtToken);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Guest login failed");
    }
  };

  return (
    <section className="bg-linear-to-br from-green-100 to-green-300 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 lg:p-10 max-w-md w-full sm:w-11/12 md:w-96 ">
        <h1 className="text-xl font-bold text-gray-900 mb-2 text-center">
          Welcome to <span className="text-green-600">myTask 🗂️</span>
        </h1>
        <p className="text-sm text-gray-600 mb-5 text-center">
          Manage your tasks effortlessly and stay productive.
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 mb-4">
          <div className="relative">
            <label className="block mb-1 font-medium text-sm">Email</label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </span>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-150"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="cursor-pointer w-full bg-linear-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-medium shadow hover:from-green-600 hover:to-green-700 transition"
          >
            Login
          </button>
        </form>


        <p className="text-sm text-center mb-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>


        <div className="flex items-center mb-4">
          <div className="grow border-t border-gray-300"></div>
          <span className="mx-2 text-xs text-gray-400">OR</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

 
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGuestLogin}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition cursor-pointer"
          >
            <FaUser className="text-blue-800" /> Continue as Guest
          </button>
        </div>

    
        <p className="text-xs text-gray-500 mt-6 text-center">
          By continuing, you agree to our{" "}
          <a href="#" className="text-green-600 hover:underline">
            Terms
          </a>{" "}
          &{" "}
          <a href="#" className="text-green-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
