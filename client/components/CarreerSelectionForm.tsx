'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/carreerselection.module.scss';
import Image from 'next/image';
import fotoCarrera from '../public/assets/Vector.png';
import { useRouter } from 'next/navigation';

interface Carreer {
  _id: string;
  name: string;
}

const CarreerForm = () => {
  const router = useRouter();
  const [carreers, setCarreers] = useState([]);
  const [selectedCarrer, setSelectedCarreer] = useState('');

  useEffect(() => {
    const getCarrers = async () => {
      try {
        const res = await fetch('http://localhost:3001/careers/allCareers');
        const carreersData = await res.json();
        setCarreers(carreersData);
      } catch (error) {
        console.error('Error fetching Carrers:', error);
      }
    };
    getCarrers();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value) {
      setSelectedCarreer(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedCarrer) {
      router.push('/seleccion-materias');
      console.log(selectedCarrer);
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
        />
      </div>
    </form>
  );
};

export default CarreerForm;
