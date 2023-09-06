'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import pdfIcon from '../public/assets/pdf-icon.svg';
import styles from '../styles/materialestudio.module.scss';
import Link from 'next/link';

export const MateriaAlumno = () => {
  /*   useEffect(() => {
    const getAssigmentData = async () => {
      const res = await fetch(
        'http://localhost:3001/upload/64f734cb524040c5839ba60f'
      );
      const data = await res.json();
      console.log(data);
    };
    getAssigmentData();
  }, []); */

  const pdfs = ['Titulo 1', 'Título 2', 'Título 3'];

  return (
    <section className={styles.mainContainer}>
      <h2 className={styles.materialTitle}>Material de estudio</h2>
      {pdfs.map((pdf, index) => (
        <article
          key={index}
          className={styles.materialContainer}>
          <Image
            src={pdfIcon}
            alt="pdf icon"
          />
          <p>{pdf}</p>
        </article>
      ))}
      <Link href="/perfil-alumno/tareas">
        <button className={styles.btnEntregar}>Entregar Trabajo</button>
      </Link>
    </section>
  );
};
