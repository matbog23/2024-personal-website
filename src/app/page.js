import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.left}>
          <div className={styles.ctas}>
          <a className={styles.primary}>Portfolio</a>
          <a className={styles.secondary}>CV - 2024</a>
          </div>
          <div className={styles.links}>
          <a
          href="https://github.com/matbog23"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/mathieu-boogaerts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/booga3rtsm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        </div>
        </div>
        <div className={styles.right}>
          <Image src="/assets/sculpture-3365574.jpg" alt="Afbeelding van Couleur via Pixabay" width={2000} height={2000} className={styles.image}/>
        </div>
      <footer className={styles.footer}>
        <h1 className={styles.display}>Mathieu®</h1>
      </footer>
    </div>
  );
}
