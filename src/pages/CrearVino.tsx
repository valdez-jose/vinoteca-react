
import { useState } from "react";
import styles from "./CrearVino.module.css";
import { crearVino } from "../services/vinoService";

function CrearVino() {
  const [nombre, setNombre] = useState("");
  const [cepa, setCepa] = useState("");
  const [anio, setAnio] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const [descripcion, setDescripcion] = useState("");

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await crearVino({
      nombre,
      cepa,
      anio: Number(anio),
      precio: Number(precio),
      descripcion,
      imagen_url: imagenUrl,
    });

    alert("Vino creado correctamente");
  } catch (error) {
    console.error(error);
    alert("Error al crear el vino");
  }
};

  return (
    <main className={styles.container}>
      <h1>Crear vino</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.fullWidth}
          type="text"
          placeholder="Nombre del vino"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <div className={styles.row}>
          <input
          type="text"
            placeholder="Cepa"
            value={cepa}
           onChange={(e) => setCepa(e.target.value)}
          />
          <input
          type="number"
          placeholder="Año"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
            />
          <input
           type="number"
            placeholder="Precio"  
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>

        <input
        className={styles.fullWidth}
        type="text"
        placeholder="URL de imagen"
        value={imagenUrl}
      onChange={(e) => setImagenUrl(e.target.value)}
      />

       <textarea
      className={styles.fullWidth}
      placeholder="Descripción"
      value={descripcion}
      onChange={(e) => setDescripcion(e.target.value)}
      />

        <button type="submit">
          Crear vino
        </button>
      </form>
    </main>
  );
}

export default CrearVino;