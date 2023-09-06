import Asistencias from '../../../components/Asistencias';
import { MateriaProfesor } from '../../../components/MateriaProfesor';
import Image from 'next/image';
import rectangle from '../../../public/assets/rectangle.png';
import styles from '../../../styles/materialestudio.module.scss';
import UserList from '../../../components/UserList';

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
        <div className={styles.grid}>
          <div className={styles.gridLeft}>
            <MateriaProfesor />
          </div>
          <div className={styles.gridRigth}>
            <UserList />
          </div>
        </div>
      </main>
    </>
  );
};

export default MateriasProfesor;
