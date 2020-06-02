import React, {useContext} from "react";
import {Link, useLocation, useNavigate} from "@reach/router";
import {AuthContext} from "../../../api/providers/AuthProvider";

export default function LoginPage() {
   const {doGlobalLogin} = useContext(AuthContext);
   let location = useLocation();
   let navigate = useNavigate();

   const doLogin = () => {
      doGlobalLogin(doGlobalLogin);
      if (location.state.prev) {
         navigate(location.state.prev, {replace: true});
      }
   };

   return (
      <div>
         <p>Hi from Login</p>
         <button onClick={doLogin}>INICIAR SESIÓN</button>
         <Link to="/register">No tengo cuenta</Link>
         <Link to="/forgot_password">Contrañea</Link>
      </div>
   );
}
