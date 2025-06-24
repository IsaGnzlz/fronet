import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from '../components/Menu'
import App from './App'
import Contactanos from '../Pages/Contactanos'

function AppRout() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/contactos" element={<App />} />
      </Routes>
    </Router>
  )
};

export default AppRout