import styles from '../styles/faqs.module.scss';

const answer =
  'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.';

export const FAQs = () => {
  return (
    <section>
      <details>
        <summary className={styles.summary}>
          ¿Cuando abren las inscripciones?
        </summary>
        <p className={styles.answer}>{answer}</p>
      </details>
      <details>
        <summary className={styles.summary}>
          ¿Donde puedo ver mis horarios?
        </summary>
        <p className={styles.answer}>{answer}</p>
      </details>
      <details>
        <summary className={styles.summary}>
          ¿Donde puedo realizar mis tramites?
        </summary>
        <p className={styles.answer}>{answer}</p>
      </details>
      <details>
        <summary className={styles.summary}>Extensión universitaria</summary>
        <p className={styles.answer}>{answer}</p>
      </details>
      <details>
        <summary className={styles.summary}>Boleto estudiantil</summary>
        <p className={styles.answer}>{answer}</p>
      </details>
      <details>
        <summary className={styles.summary}>
          Departamento de Intercambios
        </summary>
        <p className={styles.answer}>{answer}</p>
      </details>
      <details>
        <summary className={styles.summary}>Acreditación de materias</summary>
        <p className={styles.answer}>{answer}</p>
      </details>
      <details>
        <summary className={styles.summary}>Cambios de carrera</summary>
        <p className={styles.answer}>{answer}</p>
      </details>
    </section>
  );
};
