import "../styles/globals.css";

// INTERNAL IMPORT
import { Navbar } from "../Components";
import { useRef } from "react";

const MyApp = ({ Component, pageProps }) => {
  const bg = useRef();
  try {
    window.onmousemove = (e) => {
      const x = e.clientX / 30;
      const y = e.clientY / 30;
      bg.current.style.backgroundPositionX = -x + "px";
      bg.current.style.backgroundPositionY = -y + "px";
    };
  } catch (err) {}
  return (
    <div ref={bg} className="bg">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};
export default MyApp;
