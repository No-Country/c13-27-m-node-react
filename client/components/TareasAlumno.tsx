'use client';
import { useAppContext } from '../context/userContext';
import styles from '../styles/tareas.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import mainRoute from '../route';
import { useParams } from 'next/navigation';

const TareasAlumnoComponent = () => {
  const { userRegister } = useAppContext();
  const studentId = userRegister._id;
  const assignment_id = useParams();
  const assignmentId = assignment_id.assignment;

  useEffect(() => {
    const getPdfStudent = async () => {
      try {
        const res = await fetch(
          `${mainRoute}/assignments/${assignmentId}/events/${studentId}`
        );
        const data = await res.json();
      } catch (error) {
        console.log('Error fetch obteniendo pdfs del estudante', error);
      }
    };
    getPdfStudent();
  }, []);

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

// PARA PROFESOR
// assignments/:id/entregas

// PARA ALUMNO - ACA TMB PUEDE VER LOS COMENTARIOS
// assignments/:aid materia/events/:id estudiante

// ENVIAR COMENTARIOS DE PROFE A ALUMNOS
// http://localhost:PORT/:id/comments/:fileName
