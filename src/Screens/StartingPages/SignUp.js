import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const SignUp=()=> {
  const [input, setInput] = useState({
    firstname:"",
    email:"",
    password:"",
  })
  const navigate = useNavigate();


  function validate(e) {
    e.preventDefault();
  
    let fname = document.getElementById("fn").value;
    if (fname === "") {
      alert("Please enter first name");
      document.getElementById("fn").focus();
      return false;
    }
    let lname = document.getElementById("ln").value;
    if (lname === "") {
      alert("Please enter last name");
      document.getElementById("ln").focus();
      return false;
    }
  
    let nu = document.getElementById("nu").value;
    if (nu === "") {
      alert("Please enter contact No.");
      return false;
    }
    if (nu.length !== 10) {
      alert("Contact No. should be 10 digit");
      return false;
    }
  
    let email = document.getElementById("em").value;
    if (email === "") {
      alert("Please enter email id");
      document.getElementById("em").focus();
      return false;
    } else {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      } else {
        alert("Invalid E-mail Address! Please re-enter.");
        return false;
      }
    }
  
    let password = document.getElementById("pwd").value;
    if (password.length < 8) {
      alert("Please make sure that the password is of 8 characters minimum");
      return false;
    }
  
    let confirmpassword = document.getElementById("confpwd").value;
    if (confirmpassword !== password || confirmpassword === "") {
      alert(
        "Both the password and confirm password fields should have the same values and be non empty"
      );
      return false;
    }
    alert("All details entered successfully");
    localStorage.setItem("user", JSON.stringify(input))
    navigate("/")
  }


  
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="flex flex-col">
        <form onSubmit={validate} name="reg">
          <div class="flex justify-center items-center mt-5 mb-6">
            <h2>Sign Up</h2>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="text"
              name="firstname"
              value={input.firstname}
              onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
              placeholder="First Name"
              id="fn"
              className="border-black border-2 mb-4 px-6 py-2 rounded-lg"
            ></input>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Last Name"
              id="ln"
              className="border-black border-2 mb-4 px-6 py-2 rounded-lg"
            ></input>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
              placeholder="Email"
              id="em"
              className="border-black border-2 mb-4 px-6 py-2  rounded-lg"
            ></input>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="number"
              placeholder="Phone"
              id="nu"
              className="border-black border-2 mb-4 px-6 py-2  rounded-lg"
            ></input>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
              placeholder="Create Password"
              id="pwd"
              className="border-black border-2 px-6 py-2 rounded-lg mb-4"
            />
          </div>

          <div className="flex justify-center items-center">
            <input
              type="password"
              placeholder="Re-enter Password"
              id="confpwd"
              className="border-black border-2 px-6 py-2 rounded-lg mb-4"
            />
          </div>

          <div class="flex justify-center items-center mt-5">
            <input
              type="submit"
              value={"Sign Up"}
              className="border-black border-2 cursor-pointer px-6 py-2 rounded-lg mb-4"
            ></input>
          </div>

          <div className="flex flex-row">
            <div>Don't have an account</div>
            <button type="button" className="ml-1 cursor-pointer" onClick={() => navigate("/")}>
              Sign In Here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
