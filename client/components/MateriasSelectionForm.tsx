'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/materiasselection.module.scss';
import { Assignment } from '../interfaces/interfaces';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/userContext';

const MateriasSelectionForm = () => {
  const router = useRouter();

  const [assignments, setAssignments] = useState([]);
  const [selectedAssignments, setSelectedAssignments] = useState<string[]>([]);
  const [carrerId, setCarrerId] = useState<string | null>(null);
  const { userRegister, setUserRegister } = useAppContext();
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  useEffect(() => {
    const storedCarrerId = localStorage.getItem('carrerId');
    setCarrerId(storedCarrerId);
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    if (selectedAssignments.length !== 0) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
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
    if (selectedAssignments.length > 0) {
      if (userRegister.id) {
        const id = userRegister.id;
        const url = `http://www.localhost:3001/students/careerSelection/${id}`;
        fetch(url, {
          headers: { 'Content-Type': 'application/json' },
          method: 'PUT',
          body: JSON.stringify({
            ...userRegister,
            assignments: selectedAssignments,
          }),
        });
        router.push('/login');
      }
    }
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
          disabled={!submitDisabled}
        />
      </div>
    </form>
  );
};

export default MateriasSelectionForm;
