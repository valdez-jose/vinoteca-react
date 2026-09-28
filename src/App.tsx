
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Vinos from "./pages/Vinos";
import CrearVino from "./pages/CrearVino";
import EditarVino from "./pages/EditarVino";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vinos" element={<Vinos />} />
        <Route path="/vinos/crear" element={<CrearVino />} />
        <Route path="/vinos/editar/:id" element={<EditarVino />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;