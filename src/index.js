// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// // index.js or App.js
// import 'bootstrap/dist/css/bootstrap.min.css';
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//           <App />
//
//   </React.StrictMode>
// );

// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./apidata";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
