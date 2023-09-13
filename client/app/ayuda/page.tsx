import { FAQs } from '../../components/FAQs';
import styles from '../../styles/faqs.module.scss';

const AyudaPage = () => {
  return (
    <main>
      <p className={styles.firstP}>
        Te damos la bienvenida a nuestra sección de <strong>FAQs</strong>.
        Consulta tus dudas aquí.
      </p>
      <FAQs />
      <p className={styles.lastP}>
        Si no fuiste capaz de resolver tus dudas aquí no dudes en mandarnos un
        mail a <strong>educapp.ayuda@gmail.com</strong>
      </p>
    </main>
  );
};

export default AyudaPage;
