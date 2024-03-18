import React, { useRef, useState } from "react";
import { auth } from "../firebase/firestore";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ({setAuthUser}) => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const auth = getAuth();

    const activeUser = {email:email,password:password}
   

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user, "login successfull");
        Swal.fire({
          timer: 1200,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setAuthUser(true);
            localStorage.setItem('user', JSON.stringify(activeUser))
            Swal.fire({
              icon: "success",
              title: "Successfully logged in!",
              showConfirmButton: false,
              timer: 1200,
            });
          },
        });
        navigate('/table')
        // getData()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          timer: 1200,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Incorrect email or password.",
              showConfirmButton: true,
            });
          },
        });
      });
  };
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white p-5 rounded-xl shadow-xl border-[2px] border-black ">
          <form className=" flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 w-[300px] ">
              <label htmlFor="email">Email</label>
              <input
                className=" border-[2px] rounded-lg p-1 "
                type="text"
                id="email"
              />
            </div>
            <div className="flex flex-col  gap-2 ">
              <label htmlFor="password">Password</label>
              <input
                className="border-[2px] rounded-lg p-1 "
                type="password"
                id="password"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-2 ">
              <button
                type="submit"
                className="bg-black text-white border-[2px] border-white py-1 w-[40%] rounded-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
