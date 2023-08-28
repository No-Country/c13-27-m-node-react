import styles from '../../styles/home.module.scss';

const Home = () => {
  return (
    <main style={{ display: 'grid', placeItems: 'center' }}>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}> Eventos y Noticias </h1>
      </div>
      <div className={styles.imageGrid}>
        <img src="../assets/noticias-eventos 2.png" alt="" />
        <img src="../assets/noticias-eventos 1.png" alt="" />
        <img src="../assets/noticias-eventos.png" alt="" />
        <img src="../assets/noticias-eventos 3.png" alt="" />
        <img src="../assets/noticias-eventos 4.png" alt="" />
        <img src="../assets/noticias-eventos 5.png" alt="" />
      </div>
    </main>
  );
};

export default Home;
