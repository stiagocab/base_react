import React, {useEffect, useContext} from "react";
import {useNavigate, useLocation} from "@reach/router";
import {AuthContext} from "../api/providers/AuthProvider";

// check login status on private routes
export default function PrivateContainer({children}) {
   const {isLogin} = useContext(AuthContext);
   let navigate = useNavigate();
   let location = useLocation();

   useEffect(() => {
      if (!isLogin) {
         navigate("/login", {
            replace: false,
            state: {
               prev: location.pathname + location.search,
            },
         });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isLogin, location]);

   return <>{children}</>;
}
