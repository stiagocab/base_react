import React from "react";
import {Global, css} from "@emotion/core";

const GlobalStyles = () => (
   <Global
      styles={css`
         html {
            /* 10px = 1em */
            font-size: 62.5%;
         }
         body {
            /* 10px = 1em */
            font-size: 16px;
            font-size: 1.6em;
            line-height: 1.5;
            font-family: "Montserrat", sans-serif;
         }
         h1,
         h2,
         h3,
         h4,
         h5 {
            margin: 0;
            line-height: 1.5;
         }
      `}
   />
);

export default GlobalStyles;
