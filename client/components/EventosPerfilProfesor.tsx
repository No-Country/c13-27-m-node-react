// 'use client';
import { useAppContext } from '../context/userContext';
import styles from '../styles/footerperfilalumno.module.scss';
import { useEffect, useState } from 'react';
import mainRoute from '../route';
import { AssignmentEvents, Exam } from '../interfaces/interfaces';

const EventosPerfilProfesor = () => {
  const [showEvents, setShowEvents] = useState<boolean>(false);
  const [eventDataTeacher, setEventDataTeacher] = useState<Exam[]>([]);
  const { userRegister } = useAppContext();
  const id = userRegister._id;

  useEffect(() => {
    const getEventsOnPerfil = async () => {
      try {
        const res = await fetch(`${mainRoute}/teachers/${id}`);
        const data = await res.json();

        if (data.assignments) {
          const eventData = data.assignments.map(
            (assignament: AssignmentEvents) => assignament.events
          );
          const flatEventData = eventData.flat();
          setEventDataTeacher(flatEventData);
        }
      } catch (error) {
        console.log('Error recibiendo eventos del perfil', error);
      }
    };
    getEventsOnPerfil();
  }, []);

  const handleShowEvents = () => {
    setShowEvents(!showEvents);
  };

  return (
    <div>
      <div className={styles.containerBtnTitle}>
        <button className={styles.btn} onClick={handleShowEvents}>
          +
        </button>
        <h1 className={styles.titleFooter}> EVENTOS ESPECIALES </h1>
      </div>

      {showEvents && (
        <div className={styles.containerAllEvents}>
          {eventDataTeacher?.slice(0, 4).map((event) => (
            <div className={styles.boxContainer} key={event._id}>
              <div className={styles.divisionDate}>
                <p className={styles.date}> {formatMonth(event.date)} </p>
                <p className={styles.number}> {formatDate(event.date)} </p>
              </div>

              <div className={styles.divisionSubject}>
                <p className={styles.subject}> {event.type} </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventosPerfilProfesor;

// Función para formatear las fechas en la sección eventos - mes
function formatMonth(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}
// Función para formatear las fechas en la sección eventos - día
function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}
