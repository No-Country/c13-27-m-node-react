import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/horarios.module.scss';
import { Assignments } from '../interfaces/interfaces';
import Link from 'next/link';
import mainRoute from '../route';

export const Horarios = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(0);
  const [assignments, setAssignments] = useState<Assignments[]>([]);

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
    fetch(`${mainRoute}/assignments/allAssignments`)
      .then((response) => response.json())
      .then((data) => setAssignments(data))
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []);

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
          <h2>{daysOfWeek[selectedDay].name}</h2>
          <div className={styles.coursecards}>
            {assignments.map((assignment) => {
              const daysArray = assignment.days;

              if (daysArray.includes(daysOfWeek[selectedDay].name)) {
                return (
                  <Link
                    className={styles.link}
                    href="/perfil-alumno/materias">
                    <div
                      key={assignment._id}
                      className={styles.coursecard}>
                      <h3 className={styles.subject}>{assignment.name}</h3>
                      <p className={styles.time}>
                        Horario: {assignment.schedule}
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
