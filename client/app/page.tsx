'use client';
import React from 'react';
// import variables from '../styles/variables.module.scss';
import { Inter } from 'next/font/google';
import styles from '../styles/page.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Plataforma Universitaria',
};

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

const page = () => {
  const router = useRouter();

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = () => {
    router.push('/login');
  };

  const handleSignup: React.MouseEventHandler<HTMLButtonElement> = () => {
    router.push('/signup');
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerPrincipal}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}> EL FUTURO ES HOY </h1>
        </div>

        <div className={styles.containerButtons}>
          <button
            className={styles.registerButton}
            onClick={handleSignup}>
            {' '}
            REGISTRO{' '}
          </button>
          <button
            className={styles.loginButton}
            onClick={handleLogin}>
            {' '}
            INGRESAR{' '}
          </button>
        </div>
      </div>

      <div className={styles.containerImage}>
        <Image
          src="/assets/patron-inicio.svg"
          alt="imagen de la home page"
          width={729}
          height={728}
          priority
        />
      </div>

      <div className={styles.containerSubtitles}>
        <h2 className={styles.subtitleOne}>
          Más de 30.000 estudiantes nos eligen día a día
        </h2>
        <h2 className={styles.subtitleTwo}> TOP 15 UNIVERSIDADES DEL MUNDO </h2>
      </div>
    </div>
  );
};

export default page;
