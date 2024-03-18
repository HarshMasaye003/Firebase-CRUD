import { useState } from "react";
import { auth, db } from "../firebase/firestore";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

const AddData = ({getData, setUserData, toggleModal }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobnum, setMobnum] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "Registration_Info", res.user.uid), {
        email,
        fname,
        lname,
        mobnum,
        timeStamp: serverTimestamp(),
      });
      Swal.fire({
        icon: "success",
        title: "Added!",
        text: `${fname}  ${lname}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });
      setFname("");
      setLname("");
      setEmail("");
      setMobnum("");
      setPassword("");
      setTimeout(() => {
        toggleModal(false);
      }, 1200);
      getData()
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
      console.log(err);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="">
            <div
              id="formBody"
              className="w-[340px] sm:w-[340px] md:w-[400px] lg:w-[400px] xl:w-[450px] h-[480px] p-3 ease-linear delay-100 bg-white rounded-xl shadow-xl "
            >
              <form
                onSubmit={(e) => {
                  handleAdd(e);
                }}
              >
                <div className="flex flex-col items-center ">
                  <h1 className="text-xl font-semibold text-black my-2 ">
                    REGISTER
                  </h1>
                </div>
                <hr />
                <div className="flex w-full justify-evenly mt-4">
                  <h1 className="text-black ml-1 w-[45%] sm:w-[50%]  flex ">
                    First name
                  </h1>
                  <h1 className="text-black ml-1 w-[45%] sm:w-[50%]">
                    Last name
                  </h1>
                </div>
                <div className="flex gap-4 mt-4 justify-center ">
                  <input
                    className="h-8 w-[45%] sm:w-[50%] p-1 rounded-md border-[2px] border-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black "
                    type="text"
                    name="fname"
                    id="fname"
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                  <input
                    className="h-8 w-[45%] sm:w-[50%] p-1 rounded-md border-[2px] border-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black "
                    type="text"
                    name="lname"
                    id="lname"
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4 ">
                  <h1 className="text-black ml-3 flex justify-start">
                    Mobile No.
                  </h1>
                  <input
                    className=" mr-auto ml-auto h-8 p-1 w-[95%] sm:w-[100%] rounded-md border-[2px] border-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black "
                    type="number"
                    name="number"
                    id="number"
                    onChange={(e) => {
                      setMobnum(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <h1 className="text-black ml-3">E-mail</h1>
                  <input
                    className="mr-auto ml-auto h-8 p-1 w-[95%] sm:w-[100%] rounded-md border-[2px] border-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black "
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <h1 className="text-black ml-3">Password</h1>
                  <input
                    className="mr-auto ml-auto h-8 p-1 w-[95%] sm:w-[100%] rounded-md border-[2px] border-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black "
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2 mt-6 items-center ">
                  <div className="w-[50%] flex gap-2">
                    <button
                      type="submit"
                      className="bg-black text-white w-1/2 p-1 rounded-lg"
                    >
                      Register
                    </button>
                    <button
                      type="submit"
                      className="bg-white outline outline-2 outline-black w-1/2 p-1 rounded-lg"
                      onClick={toggleModal}
                    >
                      close
                    </button>
                  </div>
                  <h3 className="text-black mt-1">
                    Already Registered.?
                    <strong className="text-black">
                      <a href=""> Sign In</a>
                    </strong>
                  </h3>
                </div>
              </form>
            </div>
            {/* <div className="   ">image</div> */}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddData;
