'use client';
import { HeaderPerfil } from '../../components/HaderPerfil';
import { Horariosprofesor } from '../../components/HorariosProfesor';
import EventosPerfilProfesor from '../../components/EventosPerfilProfesor';

const ProfessorProfile = () => {
  return (
    <>
      <HeaderPerfil />
      <main>
        <Horariosprofesor />
        <EventosPerfilProfesor />
      </main>
    </>
  );
};

export default ProfessorProfile;
