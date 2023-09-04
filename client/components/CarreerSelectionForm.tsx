'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/carreerselection.module.scss';
import Image from 'next/image';
import fotocareera from '../public/assets/Vector.png';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/userContext';
import { Career } from '../interfaces/interfaces';

const initialCareer: Career = {
  _id: '',
  name: '',
};

const careerForm = () => {
  const router = useRouter();
  const [careers, setCareers] = useState<Career[]>([]);
  const [selectedcareer, setSelectedcareer] = useState<Career>(initialCareer);
  const { userRegister, setUserRegister } = useAppContext();
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  useEffect(() => {
    const getcareers = async () => {
      try {
        const res = await fetch('http://localhost:3001/careers/allCareers');
        const careersData = await res.json();
        setCareers(careersData);
      } catch (error) {
        console.error('Error fetching careers:', error);
      }
    };
    getcareers();
  }, []);

  useEffect(() => {
    if (selectedcareer._id) {
      localStorage.setItem('careerId', selectedcareer._id);
    }
  }, [selectedcareer]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    if (value) {
      setSelectedcareer({
        name: value,
        _id: id,
      });
    }

    if (selectedcareer.name === '') {
      setSubmitDisabled(true);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedcareer && userRegister._id) {
      const id = userRegister._id;
      console.log(id);
      const url = `http://www.localhost:3001/students/careerSelection/${id}`;
      const res = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify({
          _id: userRegister._id,
          firstName: userRegister.firstName,
          lastName: userRegister.lastName,
          email: userRegister.email,
          password: userRegister.password,
          dni: userRegister.dni,
          check: userRegister.check,
          career: selectedcareer.name,
        }),
      });
      console.log(res.ok);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setUserRegister({ ...data, career: selectedcareer.name });
        console.log('Usuario guardado en selección de careera', data);
        router.push('/seleccion-materias');
      }
    }
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit}>
      <div className={styles.careerMainContainer}>
        {careers.map((career: Career) => (
          <div
            className={styles.careerContainer}
            key={career._id}>
            <article className={styles.careerSelectorContainer}>
              <label
                htmlFor="career"
                className={styles.label}
              />
              <input
                type="radio"
                name="career"
                className={styles.input}
                value={career.name}
                id={career._id}
                onChange={handleChange}
              />
              <Image
                className={styles.careerImg}
                src={fotocareera}
                alt={`careera de ${career.name}`}
              />
            </article>
            <p>{career.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.btnSubmitContainer}>
        <input
          className={styles.btnSubmit}
          type="submit"
          value="Siguiente"
          disabled={!submitDisabled}
        />
      </div>
    </form>
  );
};

export default careerForm;
