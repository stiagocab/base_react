import React from "react";
import {Link} from "@reach/router";

export default function LoginPage() {
   return (
      <div>
         <p>Hi from Login</p>
         <Link to="/register">No tengo cuenta</Link>
         <Link to="/forgot_password">Contrañea</Link>
      </div>
   );
}
