import { useAppContext } from '../context/userContext';
import styles from '../styles/footerperfilalumno.module.scss';
import { useEffect, useState } from 'react';
import mainRoute from '../route';
import { StudentExamInfo } from '../interfaces/interfaces';

const FooterPerfil = () => {
  const [infoStudent, setInfoStudent] = useState<StudentExamInfo[]>([]);
  const { userRegister } = useAppContext();
  const id = userRegister._id;

  useEffect(() => {
    const getExamsAndGrades = async () => {
      try {
        const res = await fetch(`${mainRoute}/students/${id}`);
        const data = await res.json();
        setInfoStudent(data.assignmentDataForStudent);
      } catch (error) {
        console.log('Error accediendo a notas de examen', error);
      }
    };
    getExamsAndGrades();
  }, []);

  console.log(infoStudent);

  return (
    <main className={styles.containerBox}>
      <div className={styles.box}>
        <div className={styles.column}>
          <h3 className={styles.subtitle}> Materia </h3>
          {infoStudent.map((subject, index) => (
            <div key={index}>
              <p className={styles.p}> {subject.name} </p>
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.subtitle}> Primer Parcial </h3>
          {infoStudent.map((subject, index) => (
            <div key={index}>
              {subject.events.length === 0 ? (
                <p className={styles.p}>-</p>
              ) : (
                subject.events.map((event, eventIndex) => (
                  <div key={eventIndex}>
                    {event.eventType === 'Parcial' && eventIndex === 0 && (
                      <p className={styles.p}>
                        {event.grade !== undefined && event.grade !== ''
                          ? event.grade
                          : '-'}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.subtitle}> Segundo Parcial </h3>
          {infoStudent.map((subject, index) => (
            <div key={index}>
              {subject.events.length === 0 ? (
                <p className={styles.p}> - </p>
              ) : (
                subject.events.map((event, eventIndex) => (
                  <div key={eventIndex}>
                    {event.eventType === 'Parcial' && eventIndex === 1 && (
                      <p className={styles.p}>{event.grade}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.subtitle}> Final </h3>
          {infoStudent.map((subject, index) => (
            <div key={index}>
              {subject.events.length === 0 ? (
                <p className={styles.p}> - </p>
              ) : (
                subject.events
                  .filter((event) => event.eventType === 'Final')
                  .map((event, eventIndex) => (
                    <div key={eventIndex}>
                      <p className={styles.p}>{event.grade}</p>
                    </div>
                  ))
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FooterPerfil;
