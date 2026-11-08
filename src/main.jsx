import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter basename={'/'} >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production pages are pre-rendered (see scripts/prerender.mjs), so attach to
// the existing HTML. The dev server serves an empty #root, so render fresh.
if (container.firstElementChild) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
