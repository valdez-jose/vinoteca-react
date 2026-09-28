
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Descubrí nuestra Vinoteca</h1>

          <p>
            Una selección de vinos para disfrutar cada momento.
          </p>

          <Link to="/vinos" className={styles.button}>
            Ver nuestros vinos
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;