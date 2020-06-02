import React from "react";
import {Link} from "@reach/router";

export default function OrderPage() {
   return (
      <div>
         <p>Orden de compra</p>
         <Link to="/">Home</Link>
         <Link to="/orders">Ordenes</Link>
      </div>
   );
}
