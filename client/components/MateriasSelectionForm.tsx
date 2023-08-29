'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/materiasselection.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Assignment {
  _id: string;
  name: string;
}

const MateriasSelectionForm = () => {
  const router = useRouter();

  const [assignments, setAssignments] = useState([]);
  const [selectedAssignments, setSelectedAssignments] = useState<string[]>([]);

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    if (checked) {
      setSelectedAssignments((prevSelected) => [...prevSelected, name]);
    } else {
      setSelectedAssignments((prevSelected) =>
        prevSelected.filter((item) => item !== name)
      );
    }
  };

  return (
    <form>
      <div className={styles.materiasMainContainer}>
        {assignments.map((assignment: Assignment) => (
          <article
            key={assignment._id}
            className={styles.materiasContainer}>
            <input
              type="checkbox"
              className={styles.input}
              name={assignment.name}
              value={assignment.name}
              onChange={handleChange}
            />
            <div className={styles.infoContainerMateria}>
              <h2 className={styles.titleMateria}>{assignment.name}</h2>
              <div className={styles.infoMateria}>
                <p>8:00 - 9:30 AM </p>
                <p>Aula 3F </p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.btnSubmitContainer}>
        <input
          className={styles.btnSubmit}
          type="submit"
          value="Ingresar"
        />
      </div>
    </form>
  );
};

export default MateriasSelectionForm;
