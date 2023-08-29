'use client';
import { useSelector } from 'react-redux';
import { HaderPaginaAlumno } from '../../components/HaderPaginaAlumno';
import { RootState } from '../../redux/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const StudentProfile = () => {
  const router = useRouter();
  const userLogged = useSelector((state: RootState) => state.user.loggedIn);

  /*   useEffect(() => {
    if (!userLogged) {
      router.push('/login');
    }
  }, [userLogged, router]);
 */
  return (
    <>
      <HaderPaginaAlumno />
      <main></main>
    </>
  );
};

export default StudentProfile;
