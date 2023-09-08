import { createContext, useContext} from "react";
import { useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authuser,setAuthuser]=useState([]);

    return <AuthContext.Provider value={{authuser,setAuthuser}}>{children}</AuthContext.Provider>;
}

//custom hooks
const useAuthContext = () => {
    return useContext(AuthContext);
  };

export { AuthProvider, AuthContext, useAuthContext };