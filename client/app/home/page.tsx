import styles from '../../styles/home.module.scss';

const Home = () => {
  return (
    <main>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}> Eventos y Noticias </h1>
      </div>

      <div className={styles.containerImages}>
        <div className={styles.imageGrid}>
          <img
            src="../assets/noticias-eventos2.png"
            alt=""
          />
          <img
            src="../assets/noticias-eventos1.png"
            alt=""
          />
          <img
            src="../assets/noticias-eventos3.png"
            alt=""
          />
        </div>
        <div className={styles.imageGridBottom}>
          <img
            src="../assets/noticias-eventos4.png"
            alt=""
          />
          <img
            src="../assets/noticias-eventos5.png"
            alt=""
          />
          <img
            src="../assets/noticias-eventos6.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
