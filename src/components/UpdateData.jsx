import React from "react";
import { CircleX } from "lucide-react";
import Swal from "sweetalert2";

const UpdateData = ({ setEditToggle, editData }) => {
    const currentData = JSON.parse(editData)

    const handleEditConfirmation = (e) => {
        e.preventDefault()
        console.log(e)
        // Swal.fire({
        //     icon: 'question',
        //     title:'Alert',
        //     text:`Update.?`,
        //     showConfirmButton:true,
        //     showCancelButton:true,
        // })
    }
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/70 ">
      <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white p-5  rounded-xl shadow-md">
        <button
          className="bg-red-400 rounded-full p-1  relative left-[360px] "
          onClick={() => {
            setEditToggle(false);
          }}
        >
          <CircleX />{" "}
        </button>
        <form className=" flex flex-col gap-2"  >
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="">first name</label>
              <input className=" border-[2px] rounded-lg p-1 " type="text" name="" id="" defaultValue={currentData.fname}  />
            </div>
            <div className="flex flex-col  gap-2 ">
              <label htmlFor="">last name</label>
              <input className="   border-[2px] rounded-lg p-1 " type="text" name="" id="" defaultValue={currentData.lname} />
            </div>
          </div>
          <div className="flex flex-col  gap-2 ">
            <label htmlFor="">Email</label>
            <input className="   border-[2px] rounded-lg p-1 " type="text" name="" id="" defaultValue={currentData.email} />
          </div>
          <div className="flex flex-col  gap-2 ">
            <label htmlFor="">Mobile No.</label>
            <input className="   border-[2px] rounded-lg p-1 " type="text" name="" id="" defaultValue={currentData.mobnum} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-2 ">
            <button className="bg-black text-white py-1 w-[30%] rounded-lg" onClick={(e)=>{handleEditConfirmation(e)}} >
              confirm edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
