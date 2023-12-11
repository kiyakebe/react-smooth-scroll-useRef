import { forwardRef } from "react";

interface Props {}

const ScrollC = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} style={{ height: "100vh", background: "green" }}>
      ScrollC
    </div>
  );
});

export default ScrollC;
