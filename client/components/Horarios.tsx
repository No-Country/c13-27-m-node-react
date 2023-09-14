import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/horarios.module.scss';
import { Assignment } from '../interfaces/interfaces';
import { useAppContext } from '../context/userContext';
import Link from 'next/link';
import mainRoute from '../route';

export const Horarios = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(0);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const { userRegister } = useAppContext();
  const id = userRegister._id;

  const daysOfWeek = [
    {
      name: 'Lunes',
    },
    {
      name: 'Martes',
    },
    {
      name: 'Miércoles',
    },
    {
      name: 'Jueves',
    },
    {
      name: 'Viernes',
    },
  ];

  useEffect(() => {
    fetch(`${mainRoute}/students/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        return response.json();
      })
      .then((data) => {
        setAssignments(data.student.assignments);
      })
      .catch((error) => console.error('Error:', error));
  }, [id]);

  return (
    <div className={styles.daycontainer}>
      <div className={styles.daybuttons}>
        {daysOfWeek.map((day, index) => (
          <button
            key={index}
            className={`${styles.daybutton} ${
              selectedDay === index ? styles.selected : ''
            }`}
            onClick={() => setSelectedDay(index)}>
            {day.name[0]}
          </button>
        ))}
      </div>
      {selectedDay !== null && (
        <div className={styles.infocontent}>
          <div className={styles.coursecards}>
            {Array.isArray(assignments) &&
              assignments.map((assignment) => {
                const daysArray = assignment.days;

                if (daysArray.includes(daysOfWeek[selectedDay].name)) {
                  return (
                    <Link
                      key={assignment._id}
                      className={styles.link}
                      href="/perfil-alumno/materias/[assignment]"
                      as={`/perfil-alumno/materias/${encodeURIComponent(
                        assignment._id
                      )}`}>
                      <div
                        key={assignment._id}
                        className={styles.coursecard}>
                        <div className={styles.subjectContainer}>
                          <h3 className={styles.subject}>{assignment.name}</h3>
                        </div>
                        <p className={styles.time}>
                          Horario: {assignment.schedule}
                        </p>
                        <p className={styles.classroom}>
                          Aula: {assignment.classroom}
                        </p>
                      </div>
                    </Link>
                  );
                }
                return null;
              })}
          </div>
        </div>
      )}
    </div>
  );
};
