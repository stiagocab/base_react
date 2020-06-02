import React from "react";
import PagesRouter from "./router/PagesRouter";
import BaseContainer from "./containers/BaseContainer";
import AuthProvider from "./api/providers/AuthProvider";

function App() {
   return (
      <AuthProvider>
         <BaseContainer>
            <PagesRouter />
         </BaseContainer>
      </AuthProvider>
   );
}

export default App;
