import React from "react";
import {Router} from "@reach/router";
import PagesList from "./PagesList";
import NotFoundPage from "../public/pages/errors/NotFoundPage";

export default function PagesRouter() {
   return (
      <Router>
         {React.Children.toArray(
            PagesList.map((page) => {
               return <page.view path={page.path} />;
            }),
         )}
         <NotFoundPage default />
      </Router>
   );
}
