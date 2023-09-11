import { useAppContext } from '../context/userContext';
import styles from '../styles/footerperfilalumno.module.scss';
import { useEffect, useState } from 'react';
import mainRoute from '../route';
import { Assignment, Exam } from '../interfaces/interfaces';

// AssignamentEvents

const EventosPerfil = () => {
  const [showEvents, setShowEvents] = useState<boolean>(false);
  const [eventData, setEventData] = useState<Exam[]>([]);
  const { userRegister } = useAppContext();
  const id = userRegister._id;

  useEffect(() => {
    const getEventsOnPerfil = async () => {
      try {
        const res = await fetch(`${mainRoute}/students/${id}`);
        const data = await res.json();

        if (data.student) {
          const eventData = data.student.assignments.map(
            (assignament: Assignment) => assignament.events
          );
          const flatEventData = eventData.flat();
          setEventData(flatEventData);
        
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

  console.log(eventData);
  

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
          {eventData?.slice(0, 4).map((event) => (
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

export default EventosPerfil;

// Función para formatear las fechas en la sección eventos - mes
function formatMonth(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};
// Función para formatear las fechas en la sección eventos - día
function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

