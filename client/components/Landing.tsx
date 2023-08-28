import styles from '../styles/home.module.scss';

const Landing = () => {
  return (
    <main>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}> Eventos y Noticias </h1>
      </div>

      <div className={styles.containerImages}>
        <div className={styles.imageGrid}>
          <img src="../assets/noticias-eventos 2.png" alt="" />
          <img src="../assets/noticias-eventos 1.png" alt="" />
          <img src="../assets/noticias-eventos.png" alt="" />
        </div>
        <div className={styles.imageGridBottom}>
          {/* <img src="../assets/noticia 4.png" alt="" />
          <img src="../assets/noticia 5.png" alt="" />
          <img src="../assets/noticias 6.png" alt="" /> */}
        </div>
      </div>
    </main>
  );
};

export default Landing;
