import styles from '../styles/footerperfilalumno.module.scss';
import { useEffect, useState } from 'react';

interface GradeData {
  _id: string;
  name: string;
  exams: {
    type: string;
    grades: {
      grade: number;
    }[];
  }[];
}

const FooterPerfil = () => {
  const [grades, setGrades] = useState<
    { name: string; parcial1: number; parcial2: number; final: number }[]
  >([]);

  useEffect(() => {
    const getExamsAndGrades = async () => {
      try {
        const res = await fetch(
          'http://localhost:3001/assignments/AllAssignments'
        );
        const data = await res.json();
        const transformedData = data.map((subject: GradeData) => {
          const parcial1 = subject.exams[0]?.grades[0]?.grade || "-";
          
          const parcial2 = subject.exams[1]?.grades[0]?.grade || "-";

          const final = subject.exams[2]?.grades[0]?.grade || "-";

          return {
            name: subject.name,
            parcial1,
            parcial2,
            final,
          };
        });

        setGrades(transformedData);
      } catch (error) {
        console.log('Error fetching grade data', error);
      }
    };
    getExamsAndGrades();
  }, []);

  return (
    <section className={styles.containerBox}>
      <div className={styles.box}>
        <div className={styles.column}>
          <h2 className={styles.subtitle}> Materia </h2>
          {grades.map((subject, index) => (
            <p key={index} className={styles.p}>
              {subject.name}
            </p>
          ))}
        </div>
        <div className={styles.column}>
          <h2 className={styles.subtitle}> Primer Parcial </h2>
          {grades.map((subject, index) => (
            <p key={index} className={styles.p}>
              {subject.parcial1}
            </p>
          ))}
        </div>
        <div className={styles.column}>
          <h2 className={styles.subtitle}> Segundo Parcial </h2>
          {grades.map((subject, index) => (
            <p key={index} className={styles.p}>
              {subject.parcial2}
            </p>
          ))}
        </div>
        <div className={styles.column}>
          <h2 className={styles.subtitle}> Final </h2>
          {grades.map((subject, index) => (
            <p key={index} className={styles.p}>
              {subject.final}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterPerfil;


  // subject.exams.find((exam) => exam.type === 'Parcial')?.grades[0]
            //   ?.grade || 0;