import React from 'react';
import styles from '../styles/page.module.scss';
import Image from 'next/image';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.footerInfo}>
        <Image
          src="/assets/logo.svg"
          alt="logo de la universidad"
          className={styles.imageLogo}
          width={56}
          height={56}
        />

        <div className={styles.textContainer}>
          <h3 className={styles.textUniversidad}>Universidad</h3>
          <h3 className={styles.textUniversidad}>Nacional</h3>
        </div>
      </div>
      <div>     
          <h3 className={styles.followUsText}> Seguinos en nuestras redes </h3>
        

        <div className={styles.iconsSocialMedia}>
          <BsFacebook size={25} />
          <BsInstagram size={25} />
        </div>
      </div>
      <h3 className={styles.copyright}> © Todos los derechos reservados</h3>
    </div>
  );
};

export default Footer;
