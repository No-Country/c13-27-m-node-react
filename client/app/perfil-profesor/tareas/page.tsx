'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../../../styles/tareas.module.scss';

const TareasProfesor = () => {
  // const [pdfContent, setPdfContent] = useState<string>('');
  const [coment, setComent] = useState<boolean>(false);

  const toggleComent = () => {
    setComent(!coment);
  };

  //   ASYNC AWAIT
  //   useEffect(() => {
  //     const getPdf = async () => {
  //         try {
  //         const res = await fetch();
  //         const data = await res.json();
  //         setPdfContent(data);
  //       } catch (error) {
  //         console.log('Error fetching pdf documents', error);
  //       }
  //     };
  //   }, []);

  // PROMISE
  // useEffect(() => {
  //   fetch();
  //   .then(response => response.blob())  -> blob para pdfs?
  //   .then(blob => {
  //     const url = URL.createObjectURL(blob);
  //     setPdfContent(url);
  // })
  // .catch(error => {
  //     console.log('Error fetching pdf documents', error);
  // })
  // }, []);

  return (
    <main className={styles.container}>
      <h2 className={styles.title}> Trabajos entregados </h2>
      <div className={styles.containerPfd}>

        {/* Primer pdf */}
        <Image
          src="/assets/pdf-icon.svg"
          alt="icono de un doc pdf"
          width={40}
          height={40}
          className={styles.pdfImage}
        />
        <div
          className={`${styles.containerComent} ${
            coment ? styles.active : ''
          }`}>
          <p className={styles.coments} onClick={toggleComent}>
            Comentarios
          </p>
        </div>

        {coment && (
          <div className={styles.writeAndSendComent}>
            <textarea placeholder="" className={styles.inputComent}></textarea>
            <button className={styles.sendComent}> ENVIAR </button>
          </div>
        )}

      </div>

      {/* <iframe src={pdfContent} frameborder="0"></iframe> */}
    </main>
  );
};

export default TareasProfesor;

// post upload id para cargarr material desde el Alumno
//
//   GET: /upload (pasar assignment por body) ===> devuelve las clases en pdf de esa materia

// tare alumno...
// GET: /upload/:id (pasar assignment por body) ===> Devuelve las entregas de un alumno en particular

// tarea profesor ...
// GET: /upload/tasks (pasar assignment por body)  ======> devuelve todas las entregas de las materias (para el profesor)
