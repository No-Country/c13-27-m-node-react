import { useAppContext } from '../context/userContext';
import styles from '../styles/footerperfilalumno.module.scss';
import { useEffect, useState } from 'react';
import mainRoute from '../route';
import { StudentInfo } from '../interfaces/interfaces';

const FooterPerfil = () => {
  const [infoStudent, setInfoStudent] = useState<StudentInfo[]>([]);
  const { userRegister } = useAppContext();
  const id = userRegister._id;

  useEffect(() => {
    const getExamsAndGrades = async () => {
      try {
        const res = await fetch(`${mainRoute}/students/${id}`);
        const data = await res.json();
        setInfoStudent(data.student.assignments);
      } catch (error) {
        console.log('Error accediendo a notas de examen', error);
      }
    };
    getExamsAndGrades();
  }, []);




  return (
    <main className={styles.containerBox}>
      <div className={styles.box}>
        <div className={styles.column}>
          <h3 className={styles.subtitle}> Materia </h3>
          {infoStudent.map((subject, index) => (
            <p className={styles.p}> {subject.name} </p>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.subtitle}> Primer Parcial </h3>
          {infoStudent.map((subject, index) => (
            <div key={index}>
              {subject.events.map((event, eventIndex) => (
                <div key={eventIndex}>
                  {event.type === 'Parcial' && eventIndex === 0 && (
                    <p className={styles.p}> {event.eventDetails[0].grade} </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.subtitle}>Segundo parcial </h3>
          {infoStudent.map((subject, index) => (
            <div key={index}>
              {subject.events.map((event, eventIndex) => (
                <div key={eventIndex}>
                  {event.type === 'Parcial' && eventIndex === 1 && (
                    <p className={styles.p}> {event.eventDetails[0].grade} </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.subtitle}> Final </h3>
          {infoStudent.map((subject, index) => (
            <div key={index}>
              {subject.events.map((event, eventIndex) => (
                <div key={eventIndex}>
                  {event.type === 'Final' && (
                    <p className={styles.p}> {event.eventDetails[0].grade} </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FooterPerfil;
