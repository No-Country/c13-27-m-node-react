'use client';
import Link from 'next/link';
import styles from '../styles/page.module.scss';
import Image from 'next/image';
import type { RootState } from '../redux/store';

const Navbar = () => {
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
        <li>
          <Link
            href="/home"
            className={styles.itemNav}>
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/ayuda"
            className={styles.itemNav}>
            Ayuda
          </Link>
        </li>
        <li>
          <Link
            href="/info"
            className={styles.itemNav}>
            Información
          </Link>
        </li>
        <li>
          <Link
            href="/perfil-alumno"
            className={styles.itemNav}>
            Perfil
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
