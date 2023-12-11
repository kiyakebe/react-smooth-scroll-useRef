import { useRef } from "react";
import Navigation from "./Navigation";
import ScrollA from "./ScrollA";
import ScrollB from "./ScrollB";
import ScrollC from "./ScrollC";

function App() {
  const ref = Array.from({ length: 3 }, () =>
    useRef<HTMLDivElement | null>(null)
  );

  const handleClick = (i: number) => {
    if (ref[i].current) {
      console.log("found");
    }
    ref[i]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navigation onScroll={handleClick} />

      <ScrollA ref={ref[0]} />
      <ScrollB ref={ref[1]} />
      <ScrollC ref={ref[2]} />
    </div>
  );
}

export default App;
