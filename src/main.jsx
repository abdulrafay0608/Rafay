import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
