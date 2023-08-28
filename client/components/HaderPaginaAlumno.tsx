import styles from '../styles/headerperfilalumno.module.scss';
import avatar from '../public/assets/Intersect.png';
import Image from 'next/image';

export const HaderPaginaAlumno = () => {
  return (
    <section className={styles.headerContainer}>
      <article className={styles.headerGradient}></article>
      <article className={styles.userInformationContainer}>
        <div className={styles.avatarContainer}>
          <Image
            src={avatar}
            alt="avatar"
            objectFit="contain"
          />
        </div>
        <div className={styles.userInformation}>
          <p>Nombre: Juan Pérez</p>
          <p>E-mail: juanperez@mail.com</p>
          <p>Carrera: Enfermería</p>
        </div>
      </article>
    </section>
  );
};
