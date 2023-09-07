'use client';
import { UserRegister } from '../interfaces/interfaces';
import mainRoute from '../route';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import avatar from '../public/assets/alumno-login.png';
import styles from '../styles/materialestudio.module.scss';

const UserList = () => {
  const [userList, setUserList] = useState<UserRegister[]>([]);

  useEffect(() => {
    const getStudents = async () => {
      const assignmentId = '64f8cd1327c1616de4f59345';
      const res = await fetch(`${mainRoute}/students/allStudents`);

      if (res.ok) {
        const data = await res.json();
        const studentInAssignment = data.students.filter((student: any) =>
          student.assignments.includes(assignmentId)
        );
        setUserList(studentInAssignment);
      }
    };

    getStudents();
  }, [userList]);

  return (
    <section>
      <h2 className={styles.foroTitle}>Foro de la Clase</h2>
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
