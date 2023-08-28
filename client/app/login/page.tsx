import FormLogin from '../../components/FormLogin';
import styles from '../../styles/formlogin.module.scss';
import Image from 'next/image';
import login from '../../public/assets/login.png';

const Login = () => {
  return (
    <main className={styles.mainlogin}>
      <FormLogin />
      <aside className={styles.loginimagecontainer}>
        <Image
          className={styles.loginimage}
          src={login}
          width={500}
          height={600}
          alt="login"></Image>
      </aside>
    </main>
  );
};

export default Login;
