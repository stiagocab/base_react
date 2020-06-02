import React, {useContext} from "react";
import {Link} from "@reach/router";
import PrivateContainer from "../../../containers/PrivateContainer";
import {AuthContext} from "../../../api/providers/AuthProvider";

export default function HomePage() {
   const {doGlobalLogout} = useContext(AuthContext);

   return (
      <PrivateContainer>
         <p>Home page</p>
         <Link to="/orders">ORDENES</Link>
         <Link to="/login">login</Link>
         <Link to="/orders/order/sada">ORDENES</Link>
         <button onClick={doGlobalLogout}>Cerrar sesión</button>
      </PrivateContainer>
   );
}
