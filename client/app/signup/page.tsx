import React from 'react';
import { FormRegister } from '../../components/FormRegister';
import styles from '../../styles/formregister.module.scss';
import Image from 'next/image';
import registroImg from '../../public/assets/registro.png';

const Signup = () => {
  return (
    <main className={styles.mainContainer}>
      <FormRegister />
      <aside className={styles.registerImageContainer}>
        <Image
          className={styles.registerImage}
          src={registroImg}
          objectFit={'cover'}
          alt="register"></Image>
      </aside>
    </main>
  );
};

export default Signup;
