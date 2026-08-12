import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Rates from "./pages/Rates";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}