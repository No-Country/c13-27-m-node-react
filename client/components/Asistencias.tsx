import styles from '../styles/asistencias.module.scss';

const Asistencias = () => {
  const cantidadDeClases = 20;
  const asistencias = 5;
  const asistenciasPorcentaje = (asistencias * 100) / cantidadDeClases;

  const customStyle = {
    '--porcentaje': `${asistenciasPorcentaje}%`,
  } as React.CSSProperties;

  return (
    <section className={styles.asistenciasContainer}>
      <article className={styles.asistenciasInfo}>
        <h3 className={styles.asistenciasTitle}>Asistencia</h3>
        <h4 className={styles.asistenciasQty}>
          {asistencias}/{cantidadDeClases}
        </h4>
      </article>
      <aside
        className={styles.asistenciasGraph}
        style={customStyle}>
        <svg
          width="10rem"
          height="10rem">
          <circle
            r="4rem"
            cx="50%"
            cy="50%"
            pathLength="100"
            className={styles.circle}></circle>
          <circle
            r="4rem"
            cx="50%"
            cy="50%"
            pathLength="100"
            className={styles.circleBack}></circle>
        </svg>
      </aside>
    </section>
  );
};

export default Asistencias;
