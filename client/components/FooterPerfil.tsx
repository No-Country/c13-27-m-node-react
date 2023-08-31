import styles from '../styles/footerperfilalumno.module.scss';

const FooterPerfil = () => {
  return (
    <section className={styles.containerBox}>
      <div className={styles.box}>
        <div className={styles.column}>
          <h2 className={styles.subtitle}> Materia </h2>
          <p className={styles.p}> Biologia </p>
          <p className={styles.p}> Matematica </p>
          <p className={styles.p}> Microbiologia </p>
        </div>

        <div className={styles.column}>
          <h2 className={styles.subtitle}> Primer Parcial </h2>
          <p className={styles.p}> 4 </p>
          <p className={styles.p}> 7 </p>
          <p className={styles.p}> 5 </p>
        </div>

        <div className={styles.column}>
          <h2 className={styles.subtitle}> Segundo Parcial </h2>
          <p className={styles.p}> 6 </p>
          <p className={styles.p}> 3 </p>
          <p className={styles.p}> - </p>
        </div>

        <div className={styles.column}>
          <h2 className={styles.subtitle}> Final </h2>
          <p className={styles.p}> - </p>
          <p className={styles.p}> 4 </p>
          <p className={styles.p}> - </p>
        </div>
      </div>
    </section>
  );
};

export default FooterPerfil;
