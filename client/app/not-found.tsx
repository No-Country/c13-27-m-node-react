import React from 'react';
import styles from '../styles/notfound.module.scss';
import Link from 'next/link';


const NotFound = () => {
  return (
    <div>
      <section>
        <div className={styles.containerImg}>
          <div className={styles.containerTitles}>
            <h2 className={styles.error}> ERROR </h2>
            <h2 className={styles.title}> 404 </h2>
            <p className={styles.p}> Oops!... Página no encontrada </p>
            <Link href="/" className={styles.link}>
              <p> Volver a la página de inicio </p>
            </Link>
          </div>
          <img
            src="/assets/patron-inicio.svg"
            alt="imagen de la home page"
            width={729}
            height={728}
          />
        </div>
      </section>
    </div>
  );
};

export default NotFound;
