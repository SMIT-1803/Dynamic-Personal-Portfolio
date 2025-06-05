import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function ScrollWrapper({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.5,
    });
    const images = containerRef.current.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("load", () => {
        scroll.update();
      });
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div
      data-scroll-container
      ref={containerRef}
      className="min-h-screen overflow-hidden"
    >
      {children}
    </div>
  );
}

export default ScrollWrapper;
