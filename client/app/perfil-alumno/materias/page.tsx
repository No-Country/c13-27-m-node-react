import Image from 'next/image';
import { MaterialEstudio } from '../../../components/MaterialEstudio';
import rectange from '../../../public/assets/rectangle.png';

const MateriasAlumno = () => {
  return (
    <>
      <Image
        src={rectange}
        alt="rectangle"
      />
      <main>
        <h1>NOMBRE MATERIA</h1>
        <MaterialEstudio />
      </main>
    </>
  );
};

export default MateriasAlumno;
