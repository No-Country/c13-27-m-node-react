'use client';
import { HeaderPerfil } from '../../components/HaderPerfil';
import { Horarios } from '../../components/Horarios';
import EventosPerfil from '../../components/EventosPerfil';

const ProfessorProfile = () => {
  return (
    <>
      <HeaderPerfil />
      <main>
        <Horarios />
        <EventosPerfil />
      </main>
    </>
  );
};

export default ProfessorProfile;
