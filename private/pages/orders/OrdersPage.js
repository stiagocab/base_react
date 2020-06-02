import React from "react";
import {Link} from "@reach/router";

export default function OrdersPage() {
   return (
      <div>
         <p>Orders page</p>
         <Link to="/">Home</Link>
         <Link to="/orders/order/213">ORDEN 213</Link>
      </div>
   );
}
