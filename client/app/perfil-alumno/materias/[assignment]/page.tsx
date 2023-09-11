'use client';
import Image from 'next/image';
import { MateriaAlumno } from '../../../../components/MateriaAlumno';
import rectange from '../../../../public/assets/rectangle.png';
import localFont from 'next/font/local';
import styles from '../../../../styles/materialestudio.module.scss';
import Asistencias from '../../../../components/Asistencias';
import UserList from '../../../../components/UserList';

const Roboto = localFont({
  src: '../../../../public/fonts/Roboto-Regular.ttf',
});

const MateriasAlumno = () => {
  return (
    <>
      <Image
        className={styles.gradient}
        src={rectange}
        alt="rectangle"
      />
      <main className={Roboto.className}>
        <div className={styles.grid}>
          <div className={styles.gridLeft}>
            <MateriaAlumno />
            <Asistencias />
          </div>
          <div className={styles.gridRigth}>
            <UserList />
          </div>
        </div>
      </main>
    </>
  );
};

export default MateriasAlumno;
