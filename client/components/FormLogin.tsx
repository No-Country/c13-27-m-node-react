'use client';
import Signup from '../app/signup/page';
// import { useState } from 'react';
import styles from '../styles/formlogin.module.scss';
import Link from 'next/link';

interface UserLogin {
  dni: string;
  password: string;
}

const initialForm: UserLogin = {
  dni: '',
  password: '',
};

const FormLogin = () => {
  // const [loginForm, setLoginForm] = useState<UserLogin>(initialForm);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputbox}>
            <label htmlFor="dni" className={styles.label}>
              Número de documento
            </label>
            <input
              className={styles.input}
              type="text"
              name="dni"
              placeholder="Ingrese su DNI"
            />
          </div>

          <div className={styles.inputbox}>
            <label htmlFor="password" className={styles.label}>
              Contraseña
            </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div className={styles.forgotpassword}>
            <a href="" className={styles.forgottext}>
              Olvidé mi contraseña
            </a>
          </div>

          <div className={styles.registerlink}>
            No tienes cuenta?
            <Link href="/signup">
              <span> Regístrate! </span>
            </Link>
          </div>

          <div className={styles.btncontainer}>
            <input type="submit" value="Ingresar" className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
