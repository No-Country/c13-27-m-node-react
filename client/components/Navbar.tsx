import Link from 'next/link';
import styles from '../styles/page.module.scss';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.containerLogoNav}>
        <Image
          src="/assets/logo.svg"
          alt="logo de la universidad"
          className={styles.imageLogoNav}
          width={56}
          height={56}
        />
      </div>

      <ul className={styles.ulNav}>
        <li>
          <Link href="/ayuda" className={styles.itemNav}>
            Ayuda
          </Link>
        </li>
        <li>
          <Link href="/info" className={styles.itemNav}>
            Información
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

/* <li>
          <Link href="/">El Futuro es hoy</Link>
        </li>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/signup">registro</Link>
        </li>  */
