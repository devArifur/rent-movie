/* eslint-disable react/prop-types */
/**
 * Component Hirerchy:
 *  Main
 *     >>>App
 *           > Header > CardDetails // MovieCard data will be received
 *           > Slidebar
 *           > MovieList > MovieCard // data will pass between movieCard to CardDetails
 *                                  >Rating > AddToCard
 *           > Footer
 *
 *
 */

import { useState } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
