import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./ex1.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
