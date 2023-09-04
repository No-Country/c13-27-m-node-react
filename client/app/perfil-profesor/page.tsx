'use client';
import { HeaderPerfil } from '../../components/HaderPerfil';
import FooterPerfilAlumno from '../../components/FooterPerfil';
import { Horarios } from '../../components/Horarios';

const ProfessorProfile = () => {
  return (
    <>
      <HeaderPerfil />
      <main>
        <Horarios />
        <FooterPerfilAlumno />
      </main>
    </>
  );
};

export default ProfessorProfile;
