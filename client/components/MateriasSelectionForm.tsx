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
  const [careerId, setCareerId] = useState<string | null>(null);
  const { userRegister, setUserRegister } = useAppContext();
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  useEffect(() => {
    const storedcareerId = localStorage.getItem('careerId');
    setCareerId(storedcareerId);
  }, []);

  useEffect(() => {
    if (userRegister.check === 'teacher') {
      console.log(userRegister.check);
      const getAssignments = async () => {
        try {
          const res = await fetch(
            `http://localhost:3001/assignments/allAssignments`
          );
          const careerData = await res.json();
          setAssignments(careerData);

          console.log(assignments);
        } catch (error) {
          console.error('Error fetching Assignments:', error);
        }
      };
      getAssignments();
    } else if (userRegister.check === 'student' && careerId) {
      const getAssignments = async () => {
        try {
          const res = await fetch(`http://localhost:3001/careers/${careerId}`);
          const careerData = await res.json();
          setAssignments(careerData.assignments);
        } catch (error) {
          console.error('Error fetching Assignments:', error);
        }
      };
      getAssignments();
    }
  }, [userRegister, careerId]);

  useEffect(() => {
    if (selectedAssignments.length !== 0) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [selectedAssignments]);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedAssignments.length > 0) {
      if (userRegister._id) {
        const id = userRegister._id;
        const url =
          userRegister.check === 'student'
            ? `http://localhost:3001/students/careerSelection/${id}`
            : `http://localhost:3001/teachers/assignmentsSelection/${id}`;
        const res = await fetch(url, {
          headers: { 'Content-Type': 'application/json' },
          method: 'PUT',
          body: JSON.stringify({
            _id: userRegister._id,
            career: userRegister.career,
            assignments: selectedAssignments,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          setUserRegister({ ...data, assignments: selectedAssignments });
          router.push('/login');
        }
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
