import styles from '../styles/footerperfilalumno.module.scss';
import { useState } from 'react';
import { Alumni_Sans_Inline_One } from 'next/font/google';


interface Exam {
  _id: string;
  date: string;
  type: string;
}

const EventosPerfil = () => {
  // const [showEvents, setShowEvents] = useState<boolean>(false);
  const [eventData, setEventData] = useState<Exam[]>([]);


  // const handleShowEvents = () => {
  //   setShowEvents(!showEvents);
  // };



  // const id = userRegister._id
      

  // onClick={handleShowEvents};
  return (
    <section>
      <div className={styles.containerBtnTitle}>
        <button className={styles.btn}>+</button>
        <h1 className={styles.titleFooter}> EVENTOS ESPECIALES </h1>
      </div>

      {/* {showEvents && eventData.length > 0 && ( */}
        <div className={styles.containerAllEvents}>
          {eventData?.map((exam) => (
            <div className={styles.boxContainer} key={exam._id}>
              <div className={styles.divisionDate}>
                <p className={styles.date}> {exam.date} </p>
              </div>
              <div className={styles.divisionSubject}>
                <p className={styles.subject}> {exam.type} </p>
              </div>
            </div>
          ))}
        </div>
      {/* )} */}
    </section>
  );
};

export default EventosPerfil;




  {
    /* {showEvents && (
        <div className={styles.containerAllEvents}>
          <div className={styles.boxContainer}>
            <div className={styles.divisionDate}>
              <p className={styles.date}> Miercoles </p>
              <p className={styles.number}> 25 </p>
            </div>
            <div className={styles.divisionSubject}>
              <p className={styles.subject}> Examen Biología </p>
            </div>
          </div>

          <div className={styles.boxContainer}>
            <div className={styles.divisionDate}>
              <p className={styles.date}> Jueves </p>
              <p className={styles.number}> 01 </p>
            </div>
            <div className={styles.divisionSubject}>
              <p className={styles.subject}> Entrega TP Anato </p>
            </div>
          </div>

          <div className={styles.boxContainer}>
            <div className={styles.divisionDate}>
              <p className={styles.date}> Miercoles </p>
              <p className={styles.number}> 25 </p>
            </div>
            <div className={styles.divisionSubject}>
              <p className={styles.subject}> Examen Biología </p>
            </div>
          </div>

          <div className={styles.boxContainer}>
            <div className={styles.divisionDate}>
              <p className={styles.date}> Jueves </p>
              <p className={styles.number}> 01 </p>
            </div>
            <div className={styles.divisionSubject}>
              <p className={styles.subject}> Entrega TP Histo </p>
            </div>
          </div>
        </div>
      )} */
  }


// post upload id para cargarr material desde el Alumno
// 
//   GET: /upload (pasar assignment por body) ===> devuelve las clases en pdf de esa materia

// tare alumno... 
// GET: /upload/:id (pasar assignment por body) ===> Devuelve las entregas de un alumno en particular

// tarea profesor ... 
// GET: /upload/tasks (pasar assignment por body)  ======> devuelve todas las entregas de las materias (para el profesor)