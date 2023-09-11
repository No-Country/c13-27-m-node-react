'use client';
import { HeaderPerfil } from '../../components/HaderPerfil';
import { Horarios } from '../../components/Horarios';
import FooterPerfil from '../../components/FooterPerfil';
import EventosPerfil from '../../components/EventosPerfil';

const StudentProfile = () => {
  return (
    <>
      <HeaderPerfil />
      <main>
        <Horarios />
        <EventosPerfil />
        <FooterPerfil />
      </main>
    </>
  );
};

export default StudentProfile;
