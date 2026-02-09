import React from "react";
import axios from "axios";


const Logout = () => {


  const handleLogout = async () => {
    try {
     
      await axios.post("http://localhost:4000/api/admin/logout");
      //await axios.post("https://portfolio-1-ckp8.onrender.com"); 

     
      localStorage.removeItem("token");

    
      delete axios.defaults.headers.common["Authorization"];

    
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    
        <button
          onClick={handleLogout}
          className="w-full py-2  text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 "
        >
          Logout
        </button>
     
  );
};

export default Logout;
