import React, {useEffect} from "react";
import {useNavigate, useLocation} from "@reach/router";

// check login status on private routes
export default function PrivateContainer({children}) {
   const isLogin = false;
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
