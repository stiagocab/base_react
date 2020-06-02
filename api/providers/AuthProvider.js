import React, {createContext, useState} from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
   const [isLogin, setLogin] = useState();

   const doGlobalLogin = () => {
      setLogin(true);
   };
   const doGlobalLogout = () => {
      setLogin(false);
   };

   return <AuthContext.Provider value={{isLogin, setLogin, doGlobalLogin, doGlobalLogout}}>{children}</AuthContext.Provider>;
}
