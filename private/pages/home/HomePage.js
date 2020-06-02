import React from "react";
import {Link} from "@reach/router";
import PrivateContainer from "../../../containers/PrivateContainer";

export default function HomePage() {
   return (
      <PrivateContainer>
         <p>Home page</p>
         <Link to="/orders">ORDENES</Link>
         <Link to="/login">login</Link>
         <Link to="/orders/order/sada">ORDENES</Link>
      </PrivateContainer>
   );
}
