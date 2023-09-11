'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import pdfIcon from '../public/assets/pdf-icon.svg';
import styles from '../styles/materialestudio.module.scss';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Assignment } from '../interfaces/interfaces';

const initialAssignment = {
  name: '',
  _id: '',
  schedule: '',
  classroom: '',
  days: [],
};

export const MateriaAlumno = () => {
  const [assignment, setAssignment] = useState<Assignment>(initialAssignment);
  const assignment_id = useParams();
  console.log(assignment_id.assignment);

  useEffect(() => {
    const getAssigmentData = async () => {
      const url = `http://localhost:3001/assignments/${assignment_id.assignment}`;
      console.log(url);
      const res = await fetch(url);
      const data = await res.json();
      setAssignment(data);
      console.log(data);
    };
    getAssigmentData();
  }, []);

  const pdfs = ['Titulo 1', 'Título 2', 'Título 3'];

  return (
    <section className={styles.mainContainer}>
      <h1>{assignment.name}</h1>
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
      <Link
        className={styles.link}
        href="/perfil-alumno/tareas/[assignment]"
        as={`/perfil-alumno/tareas/${encodeURIComponent(assignment._id)}`}>
        <button className={styles.btnEntregar}>Entregar Trabajo</button>
      </Link>
    </section>
  );
};
