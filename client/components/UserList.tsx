'use client';
import { UserRegister } from '../interfaces/interfaces';
import mainRoute from '../route';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import avatar from '../public/assets/alumno-login.png';
import styles from '../styles/materialestudio.module.scss';
import { useParams } from 'next/navigation';

const UserList = () => {
  const [userList, setUserList] = useState<UserRegister[]>([]);
  const assignment_id = useParams();

  useEffect(() => {
    const getStudents = async () => {
      const res = await fetch(`${mainRoute}/students/allStudents`);

      if (res.ok) {
        const data = await res.json();
        const studentInAssignment = data.students.filter((student: any) =>
          student.assignments.includes(assignment_id.assignment)
        );
        setUserList(studentInAssignment);
      }
    };

    getStudents();
  }, []);

  return (
    <section>
      <h2 className={styles.foroTitle}>Listado de Alumnos</h2>
      <article>
        <ul className={styles.ul}>
          {userList.map((user: UserRegister) => (
            <li
              key={user._id}
              className={styles.li}>
              <Image
                src={avatar}
                alt="user avatar"
              />
              <p>
                {user.firstName} {user.lastName}
              </p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default UserList;
