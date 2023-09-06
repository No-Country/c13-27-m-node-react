import Asistencias from '../../../components/Asistencias';
import { MateriaProfesor } from '../../../components/MateriaProfesor';
import Image from 'next/image';
import rectangle from '../../../public/assets/rectangle.png';
import styles from '../../../styles/materialestudio.module.scss';

const MateriasProfesor = () => {
  return (
    <>
      <Image
        className={styles.gradient}
        src={rectangle}
        alt="rectangle"
      />
      <main>
        <h1>NOMBRE MATERIA</h1>
        <MateriaProfesor />
      </main>
    </>
  );
};

export default MateriasProfesor;
