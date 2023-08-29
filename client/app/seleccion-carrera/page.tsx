'use client';
import { useEffect, useState } from 'react';
import styles from '../../styles/carreerselection.module.scss';
import Image from 'next/image';
import fotoCarrera from '../../public/assets/Vector.png';

interface Carreer {
  _id: string;
  name: string;
}

const SeleccionCarrera = () => {
  const [carreers, setCarreers] = useState([]);

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

  return (
    <main>
      <p>Carreras</p>
      <form>
        {carreers.map((carreer: Carreer) => (
          <article key={carreer._id}>
            <input type="checkbox" />
            <Image
              src={fotoCarrera}
              alt={`Carrera de ${carreer.name}`}
            />
            <p>{carreer.name}</p>
          </article>
        ))}
        <input
          type="submit"
          value="Siguiente"
        />
      </form>
    </main>
  );
};

export default SeleccionCarrera;
