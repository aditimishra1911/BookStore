import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Clear the user data from the context
      setAuthUser((prevAuthUser) => ({
        ...prevAuthUser,
        user: null,
      }));

      // Remove user data from local storage
      localStorage.removeItem("Users");

      // Show success toast
      toast.success("Logout successfully");

      // Reload the page after a delay
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      // Show error toast
      toast.error("Error: " + error.message);

      // Optional: Delay for a while before doing anything else
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
