'use client';
import { MateriaProfesor } from '../../../../components/MateriaProfesor';
import Image from 'next/image';
import rectangle from '../../../../public/assets/rectangle.png';
import styles from '../../../../styles/materialestudio.module.scss';
import UserList from '../../../../components/UserList';
import { SubirpdfProfesor } from '../../../../components/SubirpdProfesor';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Assignment } from '../../../../interfaces/interfaces';
import { useEffect, useState } from 'react';
import mainRoute from '../../../../route';

const initialAssignment = {
  name: '',
  _id: '',
  schedule: '',
  classroom: '',
  days: [],
};

const MateriasProfesor = () => {
  const [assignment, setAssignment] = useState<Assignment>(initialAssignment);
  const assignment_id = useParams();

  useEffect(() => {
    const getAssigmentData = async () => {
      const url = `${mainRoute}/assignments/${assignment_id.assignment}`;
      const res = await fetch(url);
      const data = await res.json();
      setAssignment(data);
    };
    getAssigmentData();
  }, []);

  return (
    <>
      <Image
        className={styles.gradient}
        src={rectangle}
        alt="rectangle"
      />
      <main>
        <div className={styles.grid}>
          <div className={styles.gridLeft}>
            <MateriaProfesor />
            <SubirpdfProfesor />
            <Link
              href="/perfil-profesor/tareas/[assignment]"
              as={`/perfil-profesor/tareas/${encodeURIComponent(
                assignment._id
              )}`}
              className={styles.btnVerEntregas}>
              <button className={styles.btnEntregar}>Ver entregas</button>
            </Link>
          </div>
          <div className={styles.gridRigth}>
            <UserList />
          </div>
        </div>
      </main>
    </>
  );
};

export default MateriasProfesor;
