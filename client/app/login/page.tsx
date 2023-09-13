import FormLogin from '../../components/FormLogin';
import styles from '../../styles/formlogin.module.scss';

const Login = () => {
  return (
    <main className={styles.mainContainer}>
      <FormLogin />
      {/*       <aside className={styles.loginimagecontainer}></aside> */}
    </main>
  );
};

export default Login;
