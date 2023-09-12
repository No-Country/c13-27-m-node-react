'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import pdfIcon from '../public/assets/pdf-icon.svg';
import styles from '../styles/materialestudio.module.scss';
import mainRoute from '../route';
import { useParams } from 'next/navigation';
import { Assignment } from '../interfaces/interfaces';
import { initialAssignment } from './MateriaAlumno';
import Link from 'next/link';

export const MateriaProfesor = () => {
  const [assignment, setAssignment] = useState<Assignment>(initialAssignment);
  const [urlDownload, setUrlDownload] = useState<string>('');
  const [pdfs, setPdfs] = useState([]);
  const assignment_id = useParams();

  useEffect(() => {
    const getAssigmentData = async () => {
      const url = `${mainRoute}/assignments/${assignment_id.assignment}`;
      const res = await fetch(url);
      const data = await res.json();
      setAssignment(data);
    };
    getAssigmentData();
  }, []);

  useEffect(() => {
    const getPdfs = async () => {
      const url = `${mainRoute}/upload/allClasses?assignmentId=${assignment_id.assignment}`;
      const res = await fetch(url);
      const data = await res.json();
      setPdfs(data);
    };
    getPdfs();
  }, []);

  const handleDownloadRoute = async (id: string) => {
    console.log(id);
    const url = `${mainRoute}/upload/downloadFile/${id}`;
    setUrlDownload(url);
  };

  return (
    <section className={styles.mainContainer}>
      <h1>{assignment.name}</h1>
      <h2 className={styles.materialTitle}>Material de estudio</h2>
      {pdfs.map((pdf) => (
        <Link
          className={styles.link}
          key={pdf}
          href={urlDownload}>
          <article
            className={styles.materialContainer}
            onClick={() => handleDownloadRoute(pdf)}>
            <Image
              src={pdfIcon}
              alt="pdf icon"
            />
            <p>{pdf}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};
