import { useNavigate } from "react-router-dom";
import type { Vino } from "../types/Vino";
import { eliminarVino } from "../services/vinoService";
import styles from "./VinoCard.module.css";

interface VinoCardProps {
  vino: Vino;
  onEliminar: (id: number) => void;
}

function VinoCard({ vino, onEliminar }: VinoCardProps) {
  const navigate = useNavigate();

  const handleEliminar = async () => {
    const confirmar = window.confirm(
      `¿Querés eliminar "${vino.nombre}"?`
    );

    if (!confirmar) return;

    try {
      await eliminarVino(vino.id);
      onEliminar(vino.id);
    } catch (error) {
      console.error(error);
      alert("Error al eliminar el vino");
    }
  };

  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={vino.imagen_url}
        alt={vino.nombre}
      />

      <h2 className={styles.title}>{vino.nombre}</h2>

      <p className={styles.info}>Cepa: {vino.cepa}</p>
      <p className={styles.info}>Año: {vino.anio}</p>
      <p className={styles.info}>Precio: ${vino.precio}</p>
      <p className={styles.info}>{vino.descripcion}</p>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={() => navigate(`/vinos/editar/${vino.id}`)}
        >
          Editar
        </button>

        <button
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default VinoCard;