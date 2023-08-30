import styles from '../../styles/home.module.scss';
import Link from 'next/link';

const Home = () => {
  return (
    <main>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}> Eventos y Noticias </h1>
      </div>

      <div className={styles.containerImages}>
        <div className={styles.imageGrid}>
          <Link href="/noticia-escritura">
            <img src="../assets/noticias-eventos2.png" alt="" />
          </Link>
          <Link href="noticia-atomo">
            <img src="../assets/noticias-eventos1.png" alt="" />
          </Link>
          <Link href="evento-posgrado">
            <img src="../assets/noticias-eventos3.png" alt="" />
          </Link>
        </div>
        <div className={styles.imageGridBottom}>
          <Link href="noticia-lentes">
            <img src="../assets/noticias-eventos4.png" alt="" />
          </Link>
          <Link href="evento-dia-estudiante">
            <img src="../assets/noticias-eventos5.png" alt="" />
          </Link>
          <Link href="noticia-robotica">
            <img src="../assets/noticias-eventos6.png" alt="" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;

