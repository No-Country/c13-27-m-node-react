import React from 'react';
import { useState } from 'react';
import styles from '../styles/horarios.module.scss';

export const Horarios = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const daysOfWeek = [
    {
      name: 'Lunes',
      courses: [
        { subject: 'Biología', schedule: '7:00 AM - 8:00 AM' },
        { subject: 'Derecho', schedule: '8:15 AM - 9:30 PM' },
        { subject: 'Computación', schedule: '9:45 AM - 11:00 AM' },
        { subject: 'Física', schedule: '11:00 AM - 12:30 PM' },
      ],
    },
    {
      name: 'Martes',
      courses: [
        { subject: 'Matemática', schedule: '7:00 AM - 8:00 AM' },
        { subject: 'Física', schedule: '9:00 AM - 9:30 PM' },
        { subject: 'Computación', schedule: '9:40 AM - 12:00 AM' },
        { subject: 'Química', schedule: '13:00 PM - 14:30 PM' },
        { subject: 'Derecho', schedule: '16:00 AM - 16:30 PM' },
      ],
    },
    {
      name: 'Miércoles',
      courses: [
        { subject: 'Biología', schedule: '6:00 AM - 8:00 AM' },
        { subject: 'Computación', schedule: '8:30 AM - 9:30 PM' },
        { subject: 'Matemática', schedule: '9:50 AM - 11:00 AM' },
        { subject: 'Física', schedule: '11:00 AM - 12:30 PM' },
      ],
    },
    {
      name: 'Jueves',
      courses: [
        { subject: 'Computación', schedule: '9:00 AM - 10:00 AM' },
        { subject: 'Física', schedule: '11:00 AM - 12:30 PM' },
        { subject: 'Ética', schedule: '9:00 AM - 10:00 AM' },
      ],
    },
    {
      name: 'Viernes',
      courses: [
        { subject: 'Horatoria', schedule: '9:00 AM - 10:00 AM' },
        { subject: 'Historia', schedule: '11:00 AM - 12:30 PM' },
        { subject: 'Literatura', schedule: '13:00 PM - 13:30 PM' },
      ],
    },
    {
      name: 'Sábado',
      courses: [{ subject: 'Biología', schedule: '9:00 AM - 10:00 AM' }],
    },
  ];

  const handleDayClick = (dayIndex: any) => {
    setSelectedDay(dayIndex);
  };

  return (
    <div className={styles.daycontainer}>
      <div className={styles.daybuttons}>
        {daysOfWeek.map((day, index) => (
          <button
            key={index}
            className={`${styles.daybutton} ${
              selectedDay === index ? styles.selected : ''
            }`}
            onClick={() => handleDayClick(index)}>
            {day.name[0]}
          </button>
        ))}
      </div>
      {selectedDay !== null && (
        <div className={styles.infocontent}>
          <h2>{daysOfWeek[selectedDay].name}</h2>
          <div className={styles.coursecards}>
            {daysOfWeek[selectedDay].courses.map((course, index) => (
              <div key={index} className={styles.coursecard}>
                <h3 className={styles.subject}>{course.subject}</h3>
                <p className={styles.time}>Horario: {course.schedule}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
