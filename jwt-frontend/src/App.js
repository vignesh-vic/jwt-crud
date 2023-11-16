import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./layout/Navbar";
import axios from "axios";
import AuthContext from "./context/AuthContext";

axios.defaults.withCredentials = true;
const App = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" />
        {loggedIn === false && (
          <>
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
          </>
        )}
        {loggedIn === true && <Route path="/userData" />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
