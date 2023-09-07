import styles from '../styles/headerperfilalumno.module.scss';
import avatar from '../public/assets/perfil-alumno.png';
import Image from 'next/image';
import { useAppContext } from '../context/userContext';

export const HeaderPerfil = () => {
  const { userRegister } = useAppContext();

  

  return (
    <section className={styles.headerContainer}>
      <article className={styles.headerGradient}></article>
      <article className={styles.userInformationContainer}>
        <div className={styles.avatarContainer}>
          <Image
            src={avatar}
            alt="avatar"
            className={styles.avatar}
          />
        </div>
        <div className={styles.userInformation}>
          <p className={styles.name}>
            {userRegister.firstName} {userRegister.lastName}
          </p>
          <p>{userRegister.email}</p>
          <p>{userRegister.career}</p>
        </div>
      </article>
    </section>
  );
};
