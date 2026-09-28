
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Vinoteca
      </Link>

      <button
        className={styles.menuButton}
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <div
        className={`${styles.links} ${
          menuAbierto ? styles.linksOpen : ""
        }`}
      >
        <Link to="/" onClick={() => setMenuAbierto(false)}>
          Inicio
        </Link>

        <Link to="/vinos" onClick={() => setMenuAbierto(false)}>
          Vinos
        </Link>

        <Link to="/vinos/crear" onClick={() => setMenuAbierto(false)}>
          Crear vino
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;