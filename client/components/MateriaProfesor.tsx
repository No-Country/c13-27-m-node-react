'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import pdfIcon from '../public/assets/pdf-icon.svg';
import styles from '../styles/materialestudio.module.scss';
import mainRoute from '../route';
import { useParams } from 'next/navigation';
import { Assignment } from '../interfaces/interfaces';
import { initialAssignment } from './MateriaAlumno';

export const MateriaProfesor = () => {
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
    </section>
  );
};
