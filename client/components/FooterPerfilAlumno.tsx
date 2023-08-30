import { useEffect } from 'react';
import styles from '../styles/footerperfilalumno.module.scss';

const FooterPerfilAlumno = () => {
  return (
    <section>
      <h1 className={styles.titleFooter}> EVENTOS ESPECIALES </h1>
      <div className={styles.containerAllEvents}>
        <div className={styles.boxContainer}>
          <div className={styles.divisionDate}>
            <p className={styles.date}> Miercoles </p>
            <p className={styles.number}> 25 </p>
          </div>
          <div className={styles.divisionSubject}>
            <p className={styles.subject}> Examen Biología </p>
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.divisionDate}>
            <p className={styles.date}> Jueves </p>
            <p className={styles.number}> 01 </p>
          </div>
          <div className={styles.divisionSubject}>
            <p className={styles.subject}> Entrega TP Anato </p>
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.divisionDate}>
            <p className={styles.date}> Miercoles </p>
            <p className={styles.number}> 25 </p>
          </div>
          <div className={styles.divisionSubject}>
            <p className={styles.subject}> Examen Biología </p>
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.divisionDate}>
            <p className={styles.date}> Jueves </p>
            <p className={styles.number}> 01 </p>
          </div>
          <div className={styles.divisionSubject}>
            <p className={styles.subject}> Entrega TP Histo </p>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default FooterPerfilAlumno;
