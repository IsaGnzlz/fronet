import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Servicios from "../Pages/Servicios";
import Contactanos from "../Pages/Contactanos";
import SobreNosotros from "../Pages/SobreNosotros";

const AppRoutes = () => (
  <Router>
    <Routes>
        <Route path="/" element={<Servicios />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
    </Routes>
  </Router>
);

export default AppRoutes;