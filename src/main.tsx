import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UrlProvider } from "./context/index.tsx";

createRoot(document.getElementById("root")!).render(
  <UrlProvider>
    <App />
  </UrlProvider>
);
