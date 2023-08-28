'use client';
import { useEffect, useState } from 'react';

interface Carreer {
  _id: string;
  name: string;
}

const SeleccionCarrera = () => {
  const [carreers, setCarreers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/careers/allCareers');
        const carreersData = await res.json();
        setCarreers(carreersData);
        console.log(carreersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section>
        <h1>Carreras</h1>
        {carreers.map((carreer: Carreer) => (
          <article key={carreer._id}>
            <h3>{carreer.name}</h3>
          </article>
        ))}
      </section>
      <section>
        <h2>Materias</h2>
      </section>
    </main>
  );
};

export default SeleccionCarrera;
