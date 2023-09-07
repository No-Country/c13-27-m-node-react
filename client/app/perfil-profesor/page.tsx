'use client';
import { HeaderPerfil } from '../../components/HaderPerfil';
import { Horariosprofesor } from '../../components/HorariosProfesor';
import EventosPerfil from '../../components/EventosPerfil';

const ProfessorProfile = () => {
  return (
    <>
      <HeaderPerfil />
      <main>
        <Horariosprofesor />
        <EventosPerfil />
      </main>
    </>
  );
};

export default ProfessorProfile;
