'use client';
import { useAppContext } from '../context/userContext';
import styles from '../styles/tareas.module.scss';
import Image from 'next/image';

const TareasAlumnoComponent = () => {
  const { userRegister } = useAppContext();

  return (
    <div>
      <h1 className={styles.title}> Tus trabajos </h1>
      <div className={styles.containerPfd}>
        <Image
          src="/assets/pdf-icon.svg"
          alt="icono de un doc pdf"
          width={40}
          height={40}
          className={styles.pdfImage}
        />
        <p className={styles.coments}> Comentarios </p>
        <Image
          src="/assets/pdf-icon.svg"
          alt="icono de un doc pdf"
          width={40}
          height={40}
          className={styles.pdfImage}
        />
        <p className={styles.coments}> Comentarios </p>
        <div className={styles.containerComent}> </div>
      </div>
    </div>
  );
};

export default TareasAlumnoComponent;
