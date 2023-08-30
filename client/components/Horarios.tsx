import React from 'react';
import { useState } from 'react';
import styles from '../styles/horarios.module.scss';

export const Horarios = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const daysOfWeek = [
    {
      name: 'Lunes',
      schedule: '9:00 AM - 5:00 PM',
      tasks: ['Biología', 'Física'],
    },
    { name: 'Martes', schedule: '9:30 AM - 6:00 PM', tasks: ['Biología'] },
    { name: 'Miércoles', schedule: '10:00 AM - 4:30 PM', tasks: ['Biología'] },
    { name: 'Jueves', schedule: '8:00 AM - 3:00 PM', tasks: ['Biología'] },
    { name: 'Viernes', schedule: '11:00 AM - 7:00 PM', tasks: ['Matemática'] },
    { name: 'Sábado', schedule: 'Cerrado', tasks: [] },
    { name: 'Domingo', schedule: 'Cerrado', tasks: [] },
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
            className={`${styles['day-button']} ${
              selectedDay === index ? styles['selected'] : ''
            }`}
            onClick={() => handleDayClick(index)}>
            {day.name[0]}
          </button>
        ))}
      </div>
      <div className={styles['infopanel']}>
        {selectedDay !== null && (
          <div className={styles['infocontent']}>
            <h2>{daysOfWeek[selectedDay].name}</h2>
            <p>Horario: {daysOfWeek[selectedDay].schedule}</p>
            <div className={styles['taskscontainer']}>
              {daysOfWeek[selectedDay].tasks.map((task, index) => (
                <div key={index} className={styles['taskbox']}>
                  {task}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
