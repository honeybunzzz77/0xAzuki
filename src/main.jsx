import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import TransactionProvider from "./context/TransactionContext";

ReactDOM.render(
  <React.StrictMode>
]    <TransactionProvider>
      <Router>
        <App />
      </Router>
    </TransactionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
