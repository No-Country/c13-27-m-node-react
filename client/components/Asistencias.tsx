import styles from '../styles/asistencias.module.scss';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Assignment } from '../interfaces/interfaces';
import { useAppContext } from '../context/userContext';
import mainRoute from '../route';

const initialAssignment = {
  name: '',
  _id: '',
  schedule: '',
  classroom: '',
  days: [],
};

interface AssignmentDataForStudent {
  name: string;
  totalClasses: number;
  missedClasses: number;
  events: string[];
}

const initialAssignmentDataForStudent = {
  name: '',
  totalClasses: 0,
  missedClasses: 0,
  events: [],
};

const Asistencias = () => {
  const [assignmentData, setAssignmentData] =
    useState<Assignment>(initialAssignment);
  const [matchingAssignment, setMatchingAssignment] =
    useState<AssignmentDataForStudent>(initialAssignmentDataForStudent);
  const assignment_id = useParams();
  const { userRegister } = useAppContext();
  const [cantidadDeClases, setCantidadDeClases] = useState<number>(0);
  const [asistencias, setAsistencias] = useState<number>(0);
  const [asistenciasPorcentaje, setAsistenciasPorcentaje] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assignmentResponse = await fetch(
          `${mainRoute}/assignments/${assignment_id.assignment}`
        );
        const assignmentData = await assignmentResponse.json();

        const studentResponse = await fetch(
          `${mainRoute}/students/${userRegister._id}`
        );
        const studentData = await studentResponse.json();

        const match = studentData.assignmentDataForStudent.find(
          (assignment: Assignment) => assignment.name === assignmentData.name
        );

        setAssignmentData(assignmentData);
        setMatchingAssignment(match);

        console.log(assignmentData);
        console.log(match);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(matchingAssignment);
    setCantidadDeClases(matchingAssignment.totalClasses);
    setAsistencias(
      matchingAssignment.totalClasses - matchingAssignment.missedClasses
    );
  }, [matchingAssignment]);

  useEffect(() => {
    setAsistenciasPorcentaje((asistencias * 100) / cantidadDeClases);
  }, [asistencias, cantidadDeClases]);

  const customStyle = {
    '--porcentaje': `${asistenciasPorcentaje}`,
  } as React.CSSProperties;

  return (
    <section className={styles.asistenciasContainer}>
      <article className={styles.asistenciasInfo}>
        <h3 className={styles.asistenciasTitle}>Asistencia</h3>
        <h4 className={styles.asistenciasQty}>
          {asistencias}/{cantidadDeClases}
        </h4>
      </article>
      <aside
        className={styles.asistenciasGraph}
        style={customStyle}>
        <svg
          width="10rem"
          height="10rem">
          <circle
            r="4rem"
            cx="50%"
            cy="50%"
            pathLength="100"
            className={styles.circle}></circle>
          <circle
            r="4rem"
            cx="50%"
            cy="50%"
            pathLength="100"
            className={styles.circleBack}></circle>
        </svg>
      </aside>
    </section>
  );
};

export default Asistencias;
