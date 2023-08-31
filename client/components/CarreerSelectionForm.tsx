'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/carreerselection.module.scss';
import Image from 'next/image';
import fotoCarrera from '../public/assets/Vector.png';
import { useRouter } from 'next/navigation';
import { UserRegister } from '../interfaces/interfaces';

interface Carreer {
  _id: string;
  name: string;
}

const initialCarrer: Carreer = {
  _id: '',
  name: '',
};

const initialUser: UserRegister = {
  id: '',
  userRol: 'student',
  firstname: '',
  lastname: '',
  dni: '',
  email: '',
  password: '',
  passwordConfirm: '',
  termsandconditions: false,
  carreer: '',
  assignments: [],
};

const CarreerForm = () => {
  const router = useRouter();
  const [carreers, setCarreers] = useState<Carreer[]>([]);
  const [selectedCarrer, setSelectedCarreer] = useState<Carreer>(initialCarrer);
  const [user, setUser] = useState<UserRegister>(initialUser);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  useEffect(() => {
    const getCarrers = async () => {
      try {
        const res = await fetch('http://localhost:3001/careers/allCareers');
        const carreersData = await res.json();
        setCarreers(carreersData);
        console.log(carreersData);
      } catch (error) {
        console.error('Error fetching Carrers:', error);
      }
    };
    getCarrers();
  }, []);

  useEffect(() => {
    const getUser = () => {
      try {
        const id = localStorage.getItem('userId');
        fetch(`http://localhost:3001/students/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setUser(data);
            console.log('user', user);
          });
      } catch (error) {
        console.error('Error fetching Users:', error);
      }
    };
    getUser();
  }, [selectedCarrer]);

  useEffect(() => {
    if (selectedCarrer._id) {
      localStorage.setItem('carrerId', selectedCarrer._id);
    }
  }, [selectedCarrer]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    if (value) {
      setSelectedCarreer({
        name: value,
        _id: id,
      });
    }

    if (selectedCarrer.name === '') {
      setSubmitDisabled(true);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedCarrer) {
      const id = localStorage.getItem('userId');
      const url = `http://www.localhost:3001/students/careerSelection/${id}`;
      fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify({
          ...user,
          career: selectedCarrer.name,
        }),
      });
      router.push('/seleccion-materias');
      console.log(selectedCarrer);
      console.log(user);
    }
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit}>
      <div className={styles.carreerMainContainer}>
        {carreers.map((carreer: Carreer) => (
          <div
            className={styles.carreerContainer}
            key={carreer._id}>
            <article className={styles.carreerSelectorContainer}>
              <label
                htmlFor="carreer"
                className={styles.label}
              />
              <input
                type="radio"
                name="carreer"
                className={styles.input}
                value={carreer.name}
                id={carreer._id}
                onChange={handleChange}
              />
              <Image
                className={styles.carrerImg}
                src={fotoCarrera}
                alt={`Carrera de ${carreer.name}`}
              />
            </article>
            <p>{carreer.name}</p>
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

export default CarreerForm;
