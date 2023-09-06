import FormLogin from '../../components/FormLogin';
import styles from '../../styles/formlogin.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  return (
    <main>
      <FormLogin />

      <aside className={styles.loginimagecontainer}></aside>
      <ToastContainer />
    </main>
  );
};

export default Login;
