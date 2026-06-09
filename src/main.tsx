import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Lenis from "@studio-freight/lenis";

// LENIS SMOOTH SCROLL
const lenis = new Lenis({
  duration: 1.5,
  smoothWheel: true,
});

// ANIMATION FRAME
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);