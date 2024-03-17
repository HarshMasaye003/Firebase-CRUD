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

const DataTable = ({setIsAuthenticated}) => {
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

  return (
    <div className=" overflow-auto">
      <div className="w-full flex justify-center text-xl font-semibold py-3" >CRUD Firebase</div>
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
          setUserData={setUserData}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default DataTable;
