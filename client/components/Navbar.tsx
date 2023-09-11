'use client';
import Link from 'next/link';
import styles from '../styles/page.module.scss';
import Image from 'next/image';
import { useAppContext } from '../context/userContext';
import { initialUser } from '../context/userContext';

const Navbar = () => {
  const { isLogged, setIsLogged, setUserRegister, userRegister } =
    useAppContext();

  const handleLogOut = () => {
    setIsLogged(false);
    setUserRegister(initialUser);
    localStorage.clear();
  };

  return (
    <nav className={styles.navBar}>
      <Link href="/">
        <div className={styles.containerLogoNav}>
          <Image
            src="/assets/logo.svg"
            alt="logo de la universidad"
            className={styles.imageLogoNav}
            width={56}
            height={56}
          />
        </div>
      </Link>
      <ul className={styles.ulNav}>
        {isLogged && (
          <li>
            <Link
              href="/home"
              className={styles.itemNav}>
              Home
            </Link>
          </li>
        )}
        <li>
          <Link
            href="/ayuda"
            className={styles.itemNav}>
            Ayuda
          </Link>
        </li>
        {isLogged && (
          <li>
            <Link
              href={
                userRegister.check === 'student'
                  ? '/perfil-alumno'
                  : '/perfil-profesor'
              }
              className={styles.itemNav}>
              Perfil
            </Link>
          </li>
        )}
        {isLogged && (
          <li>
            <Link
              href="/"
              className={styles.itemNav}
              onClick={handleLogOut}>
              Cerrar Sesión
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
