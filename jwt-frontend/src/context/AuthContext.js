import React, { createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthContextProvider = ( props ) => {
  const [loggedIn, setLoggedIn] = React.useState(undefined);
  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:4000/loggedIn");
    setLoggedIn(loggedInRes.data);
    console.log(loggedInRes.data);
  }

  React.useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
