import { Outlet } from "react-router-dom";
import FallingDotsBackground from "./components/FallingDotsBackground";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHashElement from "./components/ScrollToHashElement";

function App() {
  return (
    <>
    
      <ScrollToTop/>
      <ScrollToHashElement />
      <FallingDotsBackground />
      <Outlet />
    </>
  );
}

export default App;
