import { useState, useEffect } from "react";
import DataTable from "./components/DataTable";
import Login from "./components/Login";
import { Navigate, Route, Routes } from "react-router";

function App() {
  const [authUser,setAuthUser] = useState(false);

  const RequiredAuth = ({ children }) => {
    return authUser ? children : <Navigate to="/login" />;
  };

  // useEffect(() => {
  //   setIsAuthenticated(JSON.parse(localStorage.getItem("is_authenticated")));
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login setAuthUser={setAuthUser}S />} />
        <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />

        <Route
          path="/table"
          element={
            <RequiredAuth>
              <DataTable />
            </RequiredAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
