'use client';
import { HeaderPerfil } from '../../components/HaderPerfil';
import { Horarios } from '../../components/Horarios';
import FooterPerfil from '../../components/FooterPerfil';
import EventosPerfilAlumno from '../../components/EventosPerfilAlumno';

const StudentProfile = () => {
  return (
    <>
      <HeaderPerfil />
      <main>
        <Horarios />
        <EventosPerfilAlumno />
        <FooterPerfil />
      </main>
    </>
  );
};

export default StudentProfile;
