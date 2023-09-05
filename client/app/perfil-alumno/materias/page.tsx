import Image from 'next/image';
import { MaterialEstudio } from '../../../components/MaterialEstudio';
import { Subirpdf } from '../../../components/Subirpdf';
import rectange from '../../../public/assets/rectangle.png';

const MateriasAlumno = () => {
  return (
    <>
      <Image src={rectange} alt="rectangle" />
      <main>
        <h1>NOMBRE MATERIA</h1>
        <MaterialEstudio />
        <Subirpdf />
      </main>
    </>
  );
};

export default MateriasAlumno;
