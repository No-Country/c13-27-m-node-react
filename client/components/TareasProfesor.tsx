// import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/tareas.module.scss';

const TareasProfesorComponent = () => {
  // const [pdfContent, setPdfContent] = useState<string>('');

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
    <div>
      <h2 className={styles.title}> Trabajos entregados </h2>
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
        <Image
          src="/assets/pdf-icon.svg"
          alt="icono de un doc pdf"
          width={40}
          height={40}
          className={styles.pdfImage}
        />
        <p className={styles.coments}> Comentarios </p>
      </div>

      {/* <iframe src={pdfContent} frameborder="0"></iframe> */}
    </div>
  );
};

export default TareasProfesorComponent;

// post upload id para cargarr material desde el Alumno
//
//   GET: /upload (pasar assignment por body) ===> devuelve las clases en pdf de esa materia

// tare alumno...
// GET: /upload/:id (pasar assignment por body) ===> Devuelve las entregas de un alumno en particular

// tarea profesor ...
// GET: /upload/tasks (pasar assignment por body)  ======> devuelve todas las entregas de las materias (para el profesor)

// --------------------------------------
// - GET /upload/allClasses : recibe assignmentId por query y devuelve los nombres de los archivos de esa materia (con ese nombre luego pueden descargarlo)

// - GET /upload/downloadFile/:fileName : recibe fileName por params y devuelve el archivo (se descarga)

