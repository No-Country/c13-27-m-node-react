'use client';
import { useEffect, useState } from 'react';
import styles from '../../styles/carreerselection.module.scss';
import Image from 'next/image';

interface Assignment {
  _id: string;
  name: string;
}

const SeleccionMateria = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const getAssignments = async () => {
      try {
        const res = await fetch(
          'http://localhost:3001/assignments/allAssignments'
        );
        const assignmentsData = await res.json();
        setAssignments(assignmentsData);
        console.log(assignments);
      } catch (error) {
        console.error('Error fetching Assignments:', error);
      }
    };
    getAssignments();
  }, []);

  return (
    <main>
      <h2>Selección de materias</h2>
      {assignments.map((assignment: Assignment) => (
        <article key={assignment._id}>
          <input type="checkbox" />
          <p>{assignment.name}</p>
        </article>
      ))}
    </main>
  );
};

export default SeleccionMateria;
