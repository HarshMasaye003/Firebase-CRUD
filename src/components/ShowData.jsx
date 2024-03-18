import React, { useState } from "react";
import UpdateData from "./UpdateData";
import { Delete, Edit, Trash2 } from "lucide-react";

const ShowData = ({ userData }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editData, setEditData] = useState([])

  const handleEdit = (user) => {
   setEditData(JSON.stringify(user))
//    console.log(JSON.parse(editData).email) 
  }

  return (
    <>
      <div className="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  ID
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  First Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Last Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Email
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Mobile No.
                </p>
              </th>

              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Action
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>

            </tr>
          </thead>
          <tbody>
            {userData ? (
              userData.map((user) => (
                <tr key={user.id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {user.id}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {user.fname}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {user.lname}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {user.email}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {user.mobnum}
                    </p>
                  </td>
                  <td className="p-4 flex gap-1">
                    <button
                      href="#"
                      className="block bg-black text-white px-1 py-1 rounded-md font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      onClick={() => {
                        setEditToggle(!editToggle);
                        handleEdit(user)
                      }}
                    >
                      <Edit/>
                    </button>
                    <button
                      href="#"
                      className="block bg-black text-white px-1 py-1 rounded-md font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      onClick={() => {
                        setEditToggle(!editToggle);
                        handleEdit(user)
                      }}
                    >
                      <Trash2/>
                    </button>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"></p>
                  </td>

                </tr>
              ))
            ) : (
              <p>no data</p>
            )}
          </tbody>
        </table>
      </div>
      {editToggle && (
        <UpdateData editData={editData} setEditToggle={setEditToggle} editToggle={editToggle} />
      )}
    </>
  );
};

export default ShowData;
