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

import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./MovieList";

export default function App() {
  return (
    <>
      <Header />
      <MovieList />
      <Footer />
    </>
  );
}
