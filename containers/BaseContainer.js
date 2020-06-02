import React from "react";
import {Helmet} from "react-helmet";
import GlobalStyles from "../assets/styles/GlobalStyles";

// ini to app an helmet
// call
// - google fonts
// - static css

export default function BaseContainer({children, title, canonical}) {
   return (
      <>
         <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={canonical} />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
            <link
               href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,600;1,700&display=swap"
               rel="stylesheet"
            />
         </Helmet>
         <GlobalStyles />
         {children}
      </>
   );
}

BaseContainer.defaultProps = {
   title: "App Name", // change the title on each page
   canonical: "http://mysite.com/example", // canonical url
};
