
import type { Vino } from "../types/Vino";
import VinoCard from "./VinoCard";
import styles from "./VinoList.module.css";

interface VinoListProps {
  vinos: Vino[];
  onEliminar: (id: number) => void;
}

function VinoList({ vinos, onEliminar }: VinoListProps) {
  return (
    <section className={styles.list}>
      {vinos.map((vino) => (
        <VinoCard
          key={vino.id}
          vino={vino}
          onEliminar={onEliminar}
        />
      ))}
    </section>
  );
}

export default VinoList;