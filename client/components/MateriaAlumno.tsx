'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import pdfIcon from '../public/assets/pdf-icon.svg';
import styles from '../styles/materialestudio.module.scss';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Assignment } from '../interfaces/interfaces';
import mainRoute from '../route';

const initialAssignment = {
  name: '',
  _id: '',
  schedule: '',
  classroom: '',
  days: [],
};

export const MateriaAlumno = () => {
  const [assignment, setAssignment] = useState<Assignment>(initialAssignment);
  const [pdfs, setPdfs] = useState([]);
  const assignment_id = useParams();

  useEffect(() => {
    const getAssigmentData = async () => {
      const url = `${mainRoute}/assignments/${assignment_id.assignment}`;
      console.log(url);
      const res = await fetch(url);
      const data = await res.json();
      setAssignment(data);
      console.log(data);
    };
    getAssigmentData();
  }, []);

  useEffect(() => {
    const getPdfs = async () => {
      const url = `${mainRoute}/upload/allClasses?assignmentId=${assignment_id.assignment}`;
      console.log(url);
      const res = await fetch(url);
      const data = await res.json();
      setPdfs(data);
      console.log(data);
    };
    getPdfs();
  }, []);

  const handleDownload = async (id: string) => {
    const url = `${mainRoute}/upload/downloadFile/${id}`;
    /*  */
  };

  return (
    <section className={styles.mainContainer}>
      <h1>{assignment.name}</h1>
      <h2 className={styles.materialTitle}>Material de estudio</h2>
      {pdfs.map((pdf) => (
        <article
          key={pdf}
          id={pdf}
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
