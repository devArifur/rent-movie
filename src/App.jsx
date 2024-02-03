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
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import { MovieContext } from "./context";

export default function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}
