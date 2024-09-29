import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.left}>
          <div className={styles.ctas}>
          <a className={styles.primary}>Portfolio</a>
          <a className={styles.primary}>CV - 2024</a>
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
          <div>
          <Image src="/assets/sculpture-3365574.jpg" alt="Afbeelding van Couleur via Pixabay" width={2000} height={2000} className={styles.image}/>
          <h1>More coming soon.</h1>
          <p>Hallo, ik ben Mathieu Boogaerts, een enthousiaste student met een passie voor front-end development en UI/UX design. Momenteel verdiep ik me in React Native en streef ik ernaar om gebruiksvriendelijke, innovatieve digitale oplossingen te creëren. Ik geloof in het combineren van strakke vormgeving met intuïtieve functionaliteit om unieke gebruikerservaringen te ontwikkelen. Naast mijn studie ben ik altijd op zoek naar nieuwe uitdagingen om mijn vaardigheden verder te ontwikkelen en te leren van de nieuwste technologieën. Neem gerust een kijkje in mijn portfolio voor een overzicht van mijn werk en projecten!</p>
        </div>
        <div>
          <Image src="/assets/sculpture-3365574.jpg" alt="Afbeelding van Couleur via Pixabay" width={2000} height={2000} className={styles.image}/>
          <h1>More coming soon.</h1>
          <p>Hallo, ik ben Mathieu Boogaerts, een enthousiaste student met een passie voor front-end development en UI/UX design. Momenteel verdiep ik me in React Native en streef ik ernaar om gebruiksvriendelijke, innovatieve digitale oplossingen te creëren. Ik geloof in het combineren van strakke vormgeving met intuïtieve functionaliteit om unieke gebruikerservaringen te ontwikkelen. Naast mijn studie ben ik altijd op zoek naar nieuwe uitdagingen om mijn vaardigheden verder te ontwikkelen en te leren van de nieuwste technologieën. Neem gerust een kijkje in mijn portfolio voor een overzicht van mijn werk en projecten!</p>
        </div>
        <div>
          <Image src="/assets/sculpture-3365574.jpg" alt="Afbeelding van Couleur via Pixabay" width={2000} height={2000} className={styles.image}/>
          <h1>More coming soon.</h1>
          <p>Hallo, ik ben Mathieu Boogaerts, een enthousiaste student met een passie voor front-end development en UI/UX design. Momenteel verdiep ik me in React Native en streef ik ernaar om gebruiksvriendelijke, innovatieve digitale oplossingen te creëren. Ik geloof in het combineren van strakke vormgeving met intuïtieve functionaliteit om unieke gebruikerservaringen te ontwikkelen. Naast mijn studie ben ik altijd op zoek naar nieuwe uitdagingen om mijn vaardigheden verder te ontwikkelen en te leren van de nieuwste technologieën. Neem gerust een kijkje in mijn portfolio voor een overzicht van mijn werk en projecten!</p>
        </div>
        </div>
      <footer className={styles.footer}>
        <h1 className={styles.display}>Mathieu®</h1>
      </footer>
    </div>
  );
}
