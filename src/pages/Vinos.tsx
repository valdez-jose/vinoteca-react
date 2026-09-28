
import { useEffect, useState } from "react";
import { obtenerVinos } from "../services/vinoService";
import type { Vino } from "../types/Vino";
import VinoList from "../components/VinoList";
import styles from "./Vinos.module.css";

function Vinos() {
  const [vinos, setVinos] = useState<Vino[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    obtenerVinos()
      .then((data) => {
        setVinos(data);
      })
      .catch((error) => {
        console.error(error);
        setError("No se pudieron cargar los vinos");
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  const handleEliminar = (id: number) => {
    setVinos((vinosActuales) =>
      vinosActuales.filter((vino) => vino.id !== id)
    );
  };

  if (cargando) {
    return <p>Cargando vinos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className={styles.container}>
      <h1>Vinos</h1>

      <VinoList
        vinos={vinos}
        onEliminar={handleEliminar}
      />
    </main>
  );
}

export default Vinos;