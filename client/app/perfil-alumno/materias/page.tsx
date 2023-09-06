import Image from 'next/image';
import { MateriaAlumno } from '../../../components/MateriaAlumno';
import rectange from '../../../public/assets/rectangle.png';
import localFont from 'next/font/local';
import styles from '../../../styles/materialestudio.module.scss';
import Asistencias from '../../../components/Asistencias';

const Roboto = localFont({ src: '../../../public/fonts/Roboto-Regular.ttf' });

const MateriasAlumno = () => {
  return (
    <>
      <Image
        className={styles.gradient}
        src={rectange}
        alt="rectangle"
      />
      <main className={Roboto.className}>
        <h1>NOMBRE MATERIA</h1>
        <MateriaAlumno />
        <Asistencias />
      </main>
    </>
  );
};

export default MateriasAlumno;
