import CarreerForm from '../../components/CarreerSelectionForm';
import styles from '../../styles/carreerselection.module.scss';
const SeleccionCarrera = () => {
  return (
    <main>
      <h2 className={styles.title}>Elije tu carrera</h2>
      <CarreerForm />
    </main>
  );
};

export default SeleccionCarrera;
