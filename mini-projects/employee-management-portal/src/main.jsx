import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./contextApi/StoreProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
    <Toaster />
  </BrowserRouter>,
  // {/* </StrictMode>, */}
);
