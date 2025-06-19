import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

export default ScrollToHashElement;