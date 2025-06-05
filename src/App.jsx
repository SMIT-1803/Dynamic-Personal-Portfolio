import { Outlet } from "react-router-dom";
import FallingDotsBackground from "./components/FallingDotsBackground";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    
      <ScrollToTop/>
      <FallingDotsBackground />
      <Outlet />
    </>
  );
}

export default App;
