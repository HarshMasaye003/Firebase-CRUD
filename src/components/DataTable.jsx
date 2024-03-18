import React, { useEffect, useState } from "react";
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
import AddData from "./AddData";
import ShowData from "./ShowData";
import { PowerCircleIcon } from "lucide-react";
import Login from "./Login";

const DataTable = ({ setAuthUser }) => {
  const [userData, setUserData] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [dataFetched, setDataFetched] = useState(false);

  const getData = async () => {
    if (!dataFetched) {
      const data = await getDocs(collection(db, "Registration_Info"));
      const users = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserData(users);
      window.localStorage.setItem("userdata", JSON.stringify(users));
      setDataFetched(true);
      //   setDataFetched(dataFetched = prev + 1)
    }
  };
  const activeUser = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthUser(false);
  };

  return (
    <div className=" overflow-auto">
      <div className="w-full flex py-3 justify-between items-center ">
        <h1 className=" relative left-3 text-red-400 " >{JSON.parse(activeUser).email}</h1>
        <strong className="text-xl font-semibold relative right-16 ">Firebase CRUD</strong>
        <div className=" relative right-3">
          <button
            className="bg-black text-white rounded-full p-1 "
            onClick={handleLogout}
          >
            {" "}
            <PowerCircleIcon />{" "}
          </button>
        </div>
      </div>
      <hr />
      <ShowData userData={userData} />
      <div className=" w-full flex gap-2 justify-center mt-2">
        <button
          className="bg-black text-white px-12 py-2 rounded-lg"
          onClick={() => {
            getData();
          }}
        >
          Show
        </button>
        <button
          className="bg-black text-white px-12 py-2 rounded-lg"
          onClick={toggleModal}
        >
          add
        </button>
      </div>
      {showModal && (
        <AddData
          userData={userData}
          getData={getData}
          setUserData={setUserData}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default DataTable;
