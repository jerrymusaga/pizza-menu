import React from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  return <>Hello World!</>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
