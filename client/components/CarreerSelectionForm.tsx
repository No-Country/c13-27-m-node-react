'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/carreerselection.module.scss';
import Image from 'next/image';
import fotoCarrera from '../public/assets/Vector.png';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/userContext';
import { Carreer } from '../interfaces/interfaces';

const initialCarrer: Carreer = {
  _id: '',
  name: '',
};

const CarreerForm = () => {
  const router = useRouter();
  const [carreers, setCarreers] = useState<Carreer[]>([]);
  const [selectedCarrer, setSelectedCarreer] = useState<Carreer>(initialCarrer);
  const { userRegister, setUserRegister } = useAppContext();
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  useEffect(() => {
    const getCarrers = async () => {
      try {
        const res = await fetch(
          'https://educapp-server-80o9.onrender.com/careers/allCareers'
        );
        const carreersData = await res.json();
        setCarreers(carreersData);
      } catch (error) {
        console.error('Error fetching Carrers:', error);
      }
    };
    getCarrers();
  }, []);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedCarrer && userRegister.id) {
      const id = userRegister.id;
      console.log(id);
      const url = `https://educapp-server-80o9.onrender.com/students/careerSelection/${id}`;
      const res = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify({
          ...userRegister,
          career: selectedCarrer.name,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (userRegister.career) {
          setUserRegister(data);
        }
        console.log('Usuario guardado en selección de Carrera', data);
      }
      router.push('/seleccion-materias');
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
