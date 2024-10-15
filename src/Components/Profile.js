import Header from "./Header";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  // const [input, setInput] = useState({
  //   email:"",
  //   password:"",
  // })
  const userName = JSON.parse(localStorage.getItem("user"));




  const navigate = useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("loggedin")
    navigate("/")
  }



  return (
    <div className="flex flex-col items-center h-screen p-5">
      <Header />
      <h2 className="mt-11 mb-5 text-2xl font-bold">Profile</h2>

        <div className="text-center mb-6">Details</div>


      <div className="justify-center items-center">

        <div>
          <div className="mr-8">First name</div>
          <div className="border-2 px-4 py-1 rounded">{userName.firstname}</div>
        </div>


        <div className="mt-5">
          <div className="mr-8">Email</div>
          <div className="border-2 px-4 py-1 rounded">{userName.email}</div>
        </div>

      </div>




        {/* <div>{userName.email}</div> */}
        <div>
          <button
          type="button" 
          onClick={handleLogout}
            className="border-2 mt-5 px-2 py-2 rounded"
          >Logout
          </button>
        </div>

    </div>
  );
}

export default Profile;
