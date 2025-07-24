import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/features/userSlice";

export default function Navbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-xl font-bold hover:text-blue-400">IlyosBro</Link>

      <div className="space-x-4">
        {user ? (
          <>
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/profile" className="hover:text-blue-400">Profile</Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-400">Login</Link>
            <Link to="/signup" className="hover:text-blue-400">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
