import { forwardRef } from "react";

interface Props {}

// forwardRef allows as to use ref as a second prop that is why we put {} first

const ScrollA = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} style={{ height: "100vh", background: "black" }}>
      ScrollA
    </div>
  );
});

export default ScrollA;
