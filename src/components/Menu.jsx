import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
  const location = useLocation()
  const linkStyle = (path) => ({
    margin: "0 1rem",
    textDecoration: "none",
    color: location.pathname === path ? "#fff" : "#333",
    background: location.pathname === path ? "#07bff" : "transparent",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    transition: "background 0.2s, color 0.2s",
  })

  return (
    <nav>
      <Link to="/" style={linkStyle("/")}>Inicio</Link>
      <Link to="/contactanos" style={linkStyle("/contactanos")}>Contactanos</Link>
      <Link to="/sobrenosotros" style={linkStyle("/sobrenosotros")}>Sobre Nosotros</Link>
    </nav>
  )
}

export default Menu