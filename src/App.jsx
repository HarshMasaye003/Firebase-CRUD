import { useState, useEffect } from "react";
import DataTable from "./components/DataTable";
import Login from "./components/Login";
import { Navigate, Route, Routes } from "react-router";
import { useNavigate } from "react-router";

function App() {
  const [authUser,setAuthUser] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (authUser) {
      navigate("/table"); // Navigate to /table if user is authenticated
    }
  }, [authUser, navigate]);

  const RequiredAuth = ({ children }) => {
    return authUser ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login setAuthUser={setAuthUser} />} />
        <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route
          path="/table"
          element={
            <RequiredAuth>
              <DataTable setAuthUser={setAuthUser} />
            </RequiredAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
