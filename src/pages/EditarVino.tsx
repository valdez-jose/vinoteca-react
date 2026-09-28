
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  actualizarVino,
  obtenerVinoPorId,
} from "../services/vinoService";
import type { Vino } from "../types/Vino";
import styles from "./EditarVino.module.css";

function EditarVino() {
  const { id } = useParams();
  const [vino, setVino] = useState<Vino | null>(null);

  useEffect(() => {
    if (!id) return;

    obtenerVinoPorId(Number(id))
      .then((data) => {
        setVino(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!vino || !id) return;

    try {
      await actualizarVino(Number(id), {
        nombre: vino.nombre,
        cepa: vino.cepa,
        anio: vino.anio,
        precio: vino.precio,
        descripcion: vino.descripcion,
        imagen_url: vino.imagen_url,
      });

      alert("Vino actualizado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al actualizar el vino");
    }
  };

  if (!vino) {
    return (
      <main className={styles.page}>
        <p className={styles.loading}>Cargando vino...</p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.editor}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>VINOTECA</span>
            <h1>Editar vino</h1>
            <p>Modificá los datos de este producto.</p>
          </div>

          <span className={styles.id}>ID #{vino.id}</span>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.preview}>
            <div className={styles.imageWrapper}>
              <img
                src={vino.imagen_url}
                alt={vino.nombre}
                className={styles.image}
              />
            </div>

            <div className={styles.previewInfo}>
              <h2>{vino.nombre}</h2>
              <p>{vino.cepa}</p>
              <strong>${vino.precio}</strong>
            </div>
          </div>

          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                type="text"
                value={vino.nombre}
                onChange={(e) =>
                  setVino({
                    ...vino,
                    nombre: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="cepa">Cepa</label>
              <input
                id="cepa"
                type="text"
                value={vino.cepa}
                onChange={(e) =>
                  setVino({
                    ...vino,
                    cepa: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="anio">Año</label>
              <input
                id="anio"
                type="number"
                value={vino.anio}
                onChange={(e) =>
                  setVino({
                    ...vino,
                    anio: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="precio">Precio</label>
              <input
                id="precio"
                type="number"
                value={vino.precio}
                onChange={(e) =>
                  setVino({
                    ...vino,
                    precio: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className={styles.fieldFull}>
              <label htmlFor="imagen">URL de imagen</label>
              <input
                id="imagen"
                type="text"
                value={vino.imagen_url}
                onChange={(e) =>
                  setVino({
                    ...vino,
                    imagen_url: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.fieldFull}>
              <label htmlFor="descripcion">Descripción</label>
              <textarea
                id="descripcion"
                value={vino.descripcion}
                onChange={(e) =>
                  setVino({
                    ...vino,
                    descripcion: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button type="submit">Guardar cambios</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default EditarVino;