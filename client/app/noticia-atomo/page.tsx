import styles from '../../styles/news.module.scss';

const NoticiaAtomo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.divContainer}>
        <div className={styles.containerTitles}>
          <h2> El Mundo detrás del Átomo: </h2>
          <h2> Un Viaje a lo Infinitesimal </h2>
        </div>
        <p className={styles.p}>
          {' '}
          El átomo, una vez considerado la unidad fundamental e indivisible de
          la materia, ha demostrado ser un microcosmos fascinante y complejo en
          sí mismo. La física moderna nos ha llevado más allá de las
          percepciones convencionales y nos ha revelado un mundo infinitesimal
          que desafía nuestra comprensión y redefine la naturaleza misma de la
          realidad. En este artículo, exploraremos "El Mundo detrás del Átomo",
          adentrándonos en la mecánica cuántica y las partículas subatómicas que
          componen el tejido mismo del universo.{' '}
        </p>

        <p className={styles.p}> La Revolución Cuántica </p>
        <p className={styles.p}>
          {' '}
          A medida que la ciencia avanzaba en el siglo XX, los científicos se
          encontraron con fenómenos que no podían ser explicados por las teorías
          clásicas. Esto llevó al nacimiento de la mecánica cuántica, una teoría
          revolucionaria que describe el comportamiento de las partículas
          subatómicas. En lugar de seguir leyes determinísticas, estas
          partículas se rigen por probabilidades y ondas de energía.{' '}
        </p>

        <p className={styles.p}> La Dualidad Onda-Partícula </p>
        <p className={styles.p}>
          {' '}
          Uno de los conceptos más intrigantes en la mecánica cuántica es la
          dualidad onda-partícula. Según esta idea, las partículas subatómicas,
          como electrones y fotones, pueden exhibir tanto comportamiento de
          partículas como de ondas. Esta dualidad desafía nuestra intuición y
          sugiere que la realidad subatómica es mucho más compleja y misteriosa
          de lo que podríamos haber imaginado.
        </p>

        <p className={styles.p}>
          {' '}
          El Principio de Incertidumbre de Heisenberg{' '}
        </p>
        <p className={styles.p}>
          {' '}
          Werner Heisenberg introdujo el principio de incertidumbre, que
          establece que es imposible conocer con precisión tanto la posición
          como la velocidad de una partícula subatómica al mismo tiempo. Cuanto
          más se conoce sobre una propiedad, menos se sabe sobre la otra. Este
          principio trasciende nuestras limitaciones tecnológicas y señala una
          característica fundamental de la realidad cuántica.{' '}
        </p>

        <p className={styles.p}> El Modelo Estándar de Partículas </p>
        <p className={styles.p}>
          {' '}
          El Modelo Estándar es una teoría que describe las partículas
          subatómicas y las fuerzas fundamentales que rigen su interacción. Este
          modelo clasifica las partículas en dos categorías principales:
          fermiones (que incluyen quarks y leptones) y bosones (como los bosones
          de gauge responsables de las fuerzas electromagnéticas, débiles y
          fuertes). El Modelo Estándar ha sido confirmado por experimentos en
          aceleradores de partículas y ha brindado una comprensión profunda de
          la estructura de la materia.{' '}
        </p>

        <p className={styles.p}> La Realidad del Vacío Cuántico </p>
        <p className={styles.p}>
          {' '}
          Incluso el vacío aparentemente vacío del espacio está lleno de
          actividad en el nivel cuántico. Las fluctuaciones cuánticas generan
          partículas virtuales que aparecen y desaparecen en un tiempo
          increíblemente corto. Este fenómeno, conocido como el Principio de
          Incertidumbre de energía-tiempo, tiene implicaciones profundas para
          nuestra comprensión del espacio-tiempo y la creación misma de
          partículas.{' '}
        </p>

        <p className={styles.p}> Conclusiones </p>
        <p>
          {' '}
          El mundo detrás del átomo es un reino asombroso y misterioso que
          desafía nuestras intuiciones y nos invita a reconsiderar la naturaleza
          misma de la realidad. La mecánica cuántica nos revela que el tejido
          fundamental del universo está tejido con hilos de probabilidades y
          ondas de energía. Aunque puede ser desafiante de entender
          completamente, el estudio de las partículas subatómicas nos ha llevado
          a avances tecnológicos notables y una comprensión más profunda de la
          naturaleza del cosmos. A medida que la investigación continúa en el
          campo de la física cuántica, es seguro decir que el mundo detrás del
          átomo seguirá revelando secretos que nos dejarán maravillados y
          perplejos.{' '}
        </p>
      </div>
    </section>
  );
};

export default NoticiaAtomo;
