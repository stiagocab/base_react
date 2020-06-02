import React from "react";
import PagesRouter from "./router/PagesRouter";
import BaseContainer from "./containers/BaseContainer";

function App() {
   return (
      <BaseContainer>
         <PagesRouter />
      </BaseContainer>
   );
}

export default App;
