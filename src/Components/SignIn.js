import React, { useState } from "react";
import { useNavigate } from "react-router-dom";





function SignIn() {
  const [input, setInput] = useState({
    email:"",
    password:"",
  })
  const navigate = useNavigate();

  const validate =(e)=> {
    e.preventDefault();
  
    // let email = document.getElementById("em").value;
    // if (email === "") {
    //   alert("Please enter email id");
    //   document.getElementById("em").focus();
    //   return false;
    // } else {
    //   if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    //     // && email == email I entered in sign up
    //   ) {
    //   } else {
    //     alert("Invalid E-mail Address! Please re-enter.");
    //     return false;
    //   }
    // }
  
    // let password = document.getElementById("pwd").value;
    // if (password.length < 8) {
    //   alert("Please make sure that the password is of 8 characters minimum");
    //   return false;
    // }
  
    // alert("All details entered successfully");
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password){
      localStorage.setItem("loggedin", true)
      navigate("/home")
    } else {
      alert("Wrong email or password")
    } 
  }



  
  return (
      <div class="flex justify-center items-center h-screen">
        <div class="flex flex-col">
          <form onSubmit={validate} name="reg">
            <div class="flex justify-center items-center mt-5 mb-6">
              <h2>Sign In</h2>
            </div>

            <div className="flex justify-center items-center">
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
                placeholder="Email"
                id="em"
                className="border-black border-2 mb-4 px-6 py-2 rounded-lg "
              ></input>
            </div>

            <div className="flex justify-center items-center">
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}
                placeholder="Password"
                id="pwd"
                className="border-black border-2 px-6 py-2 rounded-lg"
              />
            </div>

            <div class="flex justify-center items-center mt-5">
              <input
                type="submit"
                value={"Login"}
                className="border-black border-2 cursor-pointer px-6 py-2 rounded-lg"
              ></input>
            </div>

            <div className="flex flex-row">
              <div>Don't have an account</div>
              <button type="button" className="ml-1 cursor-pointer" onClick={() => navigate("/signup")}>
                Sign Up Here
              </button>
            </div>
          </form>
        </div>
      </div>

  );
}

export default SignIn;