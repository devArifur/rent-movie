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

import Header from "./Header";

export default function App() {
  return <Header />;
}
