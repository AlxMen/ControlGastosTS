import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BudgetProvaider } from "./contexts/BudgetContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BudgetProvaider>
      <App />
    </BudgetProvaider>
  </React.StrictMode>
);
