import styles from '../styles/loader.module.scss';

const Loading = () => {
  return (
    <main>
      <div className={styles.loaderContainer}>
        <span className={styles.loader}></span>;
      </div>
    </main>
  );
};

export default Loading;
