'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/materiasselection.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Assignment {
  _id: string;
  name: string;
  schedule: string;
  classroom: string;
}

const MateriasSelectionForm = () => {
  const router = useRouter();

  const [assignments, setAssignments] = useState([]);
  const [selectedAssignments, setSelectedAssignments] = useState<string[]>([]);
  const [carrerId, setCarrerId] = useState<string | null>(null);

  useEffect(() => {
    const storedCarrerId = localStorage.getItem('carrerId'); // Recuperar el carrerId
    setCarrerId(storedCarrerId); // Actualizar el estado con el carrerId
  }, []);

  useEffect(() => {
    console.log(carrerId);

    if (carrerId) {
      const getAssignments = async () => {
        try {
          const res = await fetch(`http://localhost:3001/careers/${carrerId}`);
          const carrerData = await res.json();
          setAssignments(carrerData.assignments);
          console.log(assignments);
        } catch (error) {
          console.error('Error fetching Assignments:', error);
        }
      };
      getAssignments();
    }
  }, [carrerId]);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
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
                <p>{assignment.schedule}</p>
                <p>{assignment.classroom}</p>
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
