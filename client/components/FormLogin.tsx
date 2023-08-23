'use client';
import { ChangeEvent, useState } from 'react';
import styles from '../styles/formlogin.module.scss';
import Link from 'next/link';

const FormLogin = () => {
  const [loginForm, setLoginForm] = useState({
    dni: '',
    password: '',
  });

  const [isDirty, setIsDirty] = useState({
    dni: false,
    password: false,
  });

  const [errorDni, setErrorDni] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [validNumber, setValidNumber] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid) {
      const url = './home';
      window.location.href = url;
    }
  };

  const handleInputDni = (event: any) => {
    event.preventDefault();

    if (event.target.value.length === 0) {
      setErrorDni(true);
    }

    if (event.target.value.length > 0) {
      setErrorDni(false);
    }

    if (validationNumber(loginForm.dni)) {
      setValidNumber(true);
    }

    if (!validationNumber(loginForm.dni)) {
      setValidNumber(false);
    }

    setIsDirty({
      ...isDirty,
      dni: true,
    });

    const { name, value } = event.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.value.length === 0) {
      setErrorPassword(true);
    }

    if (event.target.value.length > 0) {
      setErrorPassword(false);
    }

    setIsDirty({
      ...isDirty,
      password: true,
    });

    const { name, value } = event.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const validationNumber = (dni: string) => {
    dni = loginForm.dni;
    const characters = /^[0-9]+$/;
    const valnumber = characters.test(dni) && dni.length >= 7;
    return valnumber;
  };

  const isFormDirty = isDirty.dni && isDirty.password;
  const isFormValid = validNumber && !errorDni && !errorPassword;

  // const onSubmit = (data: any) => console.log(JSON.stringify(data));
  return (
    <div className={styles.formcontainer}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.inputbox}>
          <label htmlFor="dni" className={styles.label}>
            Número de documento
          </label>
          <input
            className={styles.input}
            type="text"
            id="dni"
            name="dni"
            placeholder="Ingrese su DNI"
            value={loginForm.dni}
            onChange={handleInputDni}
          />
          {errorDni && (
            <div className={styles.error}>
              <p>El campo dni es obligatorio</p>
            </div>
          )}
          {!errorDni && !validNumber && (
            <div className={styles.error}>
              <p>El campo dni no es válido</p>
            </div>
          )}
        </div>

        <div className={styles.inputbox}>
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={loginForm.password}
            onChange={handleInputPassword}
          />
          {errorPassword && (
            <div className={styles.error}>
              <p>El campo Contraseña es obligatorio</p>
            </div>
          )}
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
          <input
            type="submit"
            value="Ingresar"
            className={`${styles.btn} ${
              isFormValid ? '' : styles.disabledbutton
            }`}
            disabled={!isFormValid || !isFormDirty}
          />
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
