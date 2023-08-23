import React from 'react';
import styles from '../styles/page.module.scss';

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div>
        <h3> Universidad Nacional </h3>
        <h3> © Todos los derechos reservados </h3>
      </div>

      <h3 className={styles.followUsText}> Seguinos en nuestras redes </h3>
    </div>
  );
};

export default Footer;
