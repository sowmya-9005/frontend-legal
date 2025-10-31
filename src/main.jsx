import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />  {/* <-- DON'T wrap App in another <BrowserRouter> here */}
  </React.StrictMode>
);
