import styles from '../styles/faqs.module.scss';

export const FAQs = () => {
  return (
    <section>
      <details>
        <summary className={styles.summary}>
          ¿Cuando abren las inscripciones?
        </summary>
        <p className={styles.answer}>
          Las inscripciones abren del 15 al 25 de febrero y del 20 al 30 de
          julio.
        </p>
      </details>
      <details>
        <summary className={styles.summary}>
          ¿Donde puedo ver mis horarios?
        </summary>
        <p className={styles.answer}>
          Los horarios de las materias en las cuales el alumno está inscripto
          puede verse en el perfil del alumno.
        </p>
      </details>
      <details>
        <summary className={styles.summary}>
          ¿Donde puedo realizar mis tramites?
        </summary>
        <p className={styles.answer}>
          Todo tipo de trámites debe realizarse en la oficina de alumnos.
        </p>
      </details>
      <details>
        <summary className={styles.summary}>Extensión universitaria</summary>
        <p className={styles.answer}>
          La Extensión Universitaria es una faceta esencial de nuestra
          universidad. A través de esta iniciativa, compartimos el conocimiento
          y los recursos de nuestra institución con la comunidad en general.
          Ofrecemos programas de educación continua, eventos culturales,
          servicios de asesoramiento, y colaboramos en proyectos que benefician
          a nuestra comunidad local. La Extensión Universitaria refleja nuestro
          compromiso con la sociedad y busca enriquecer vidas, fomentar el
          aprendizaje continuo y contribuir al desarrollo de nuestra región. Si
          deseas obtener más información sobre nuestros programas y servicios de
          Extensión Universitaria, ¡no dudes en visitar nuestra oficina!
        </p>
      </details>
      <details>
        <summary className={styles.summary}>Boleto estudiantil</summary>
        <p className={styles.answer}>
          Si cumple con los requisitos usted puede solicitar el boleto
          estudiantil. Enviar un e-mail a Buni@educapp.com para completar el
          formulario.
        </p>
      </details>
      <details>
        <summary className={styles.summary}>
          Departamento de Intercambios
        </summary>
        <p className={styles.answer}>
          Los intercambios tanto nacionales como internacionales están
          disponibles a partir del segundo año de cursada de cada carrera.
          Dirigirse a la oficina de intercambios para más información.
        </p>
      </details>
      <details>
        <summary className={styles.summary}>Acreditación de materias</summary>
        <p className={styles.answer}>
          Toda acreditación de materias debe realizarse en la oficina de alumnos
          completando un formulario que se le será entregado una vez allí.
        </p>
      </details>
      <details>
        <summary className={styles.summary}>Cambios de carrera</summary>
        <p className={styles.answer}>
          Los cambios de carrera deben realizarse en el momento que abran las
          inscripciones.
        </p>
      </details>
    </section>
  );
};
