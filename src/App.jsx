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

export default function App() {
  return <p className="text-red-500 text-4xl underline">Hello World</p>;
}
