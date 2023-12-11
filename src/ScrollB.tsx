import { forwardRef } from "react";

interface Props {}

const ScrollB = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} style={{ height: "100vh", background: "orange" }}>
      ScrollB
    </div>
  );
});

export default ScrollB;
