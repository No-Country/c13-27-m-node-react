import React from 'react';
import styles from '../styles/page.module.scss';
import Image from 'next/image';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  return (
    // <div> </div>
    <div className={styles.containerFooter}>
      <div>
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

        <h3 className={styles.copyright}> © Todos los derechos reservados</h3>
      </div>
      <div>
        <div className={styles.containerFollowIn}>
          <div className={styles.contentFollowText}>
            <h3 className={styles.followText}> Seguinos en nuestras redes </h3>
          </div>
          <div className={styles.iconsSocialMedia}>
            <Link href="https://www.facebook.com/" target="_blank">
              <BsFacebook size={25} color="#FFFFFF" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <BsInstagram size={25} color="#FFFFFF" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
