'use client';
import styles from '../../../styles/tareas.module.scss';
import Image from 'next/image';
import { useState } from 'react';

const TareasAlumno = () => {
  const [readComent, setReadComent] = useState<boolean>(false);

  const toggleComent = () => {
    setReadComent(!readComent);
  };

  return (
    <main>
      <h1 className={styles.title}> Tus trabajos </h1>
      <div className={styles.containerPfd}>
        <Image
          src="/assets/pdf-icon.svg"
          alt="icono de un doc pdf"
          width={40}
          height={40}
          className={styles.pdfImage}
        />
        <div
          className={`${styles.containerComent} ${
            readComent ? styles.active : ''
          }`}>
          <p className={styles.coments} onClick={toggleComent}>
            Comentarios
          </p>
        </div>
        {readComent && (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            deleniti. Quo quasi, perspiciatis voluptatum vel vitae sunt
            praesentium ipsum, provident accusantium aut necessitatibus esse
            voluptate impedit, minus exercitationem laborum? Itaque.
          </p>
        )}
      </div>
    </main>
  );
};

export default TareasAlumno;
