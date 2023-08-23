'use client';
import React, { ChangeEvent, useState } from 'react';
import styles from '../styles/formregister.module.scss';
import { useRouter } from 'next/navigation';

interface UserRegister {
  userRol: 'alumno' | 'profesor';
  firstname: string;
  lastname: string;
  dni: string;
  email: string;
  password: string;
  passwordConfirm: string;
  termsandconditions: boolean;
}

const initialForm: UserRegister = {
  userRol: 'alumno',
  firstname: '',
  lastname: '',
  dni: '',
  email: '',
  password: '',
  passwordConfirm: '',
  termsandconditions: false,
};

export const FormRegister = () => {
  const router = useRouter();
  const [registerForm, setRegisterForm] = useState<UserRegister>(initialForm);
  const [error, setError] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    const regexDni = /^[0-9]*$/;
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    const newErrors: Partial<Record<keyof UserRegister, string>> = {};

    if (!registerForm.firstname || !regexName.test(registerForm.firstname)) {
      newErrors.firstname = 'Nombre inválido';
    }

    if (!registerForm.lastname || !regexName.test(registerForm.lastname)) {
      newErrors.lastname = 'Apellido inválido';
    }

    if (!registerForm.dni || !regexDni.test(registerForm.dni)) {
      newErrors.dni = 'DNI inválido';
    }

    if (!registerForm.email || regexEmail.test(registerForm.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!registerForm.password) {
      newErrors.password = 'Debes elegir una contraseña';
    }

    if (registerForm.password !== registerForm.passwordConfirm) {
      newErrors.passwordConfirm = 'Las contraseñas no coinciden';
    }

    if (registerForm.termsandconditions) {
      newErrors.termsandconditions = 'Debes aceptar los términos y condiciones';
    }

    setRegisterForm({
      ...registerForm,
      [name]: inputValue,
    });
    setError(newErrors);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(error);
    console.log(registerForm);
  };

  const handleRoute = () => {
    if (Object.keys(error).length === 0) {
      router.push('/home');
    } else {
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.formContainer}>
      <label
        htmlFor="firstname"
        className={styles.label}>
        Nombre
      </label>
      <input
        className={`${styles.input} ${
          error.firstname ? styles.inputError : ''
        }`}
        type="text"
        name="firstname"
        onChange={handleChange}
      />
      <label
        htmlFor="lastname"
        className={styles.label}>
        Apellido
      </label>
      <input
        className={`${styles.input} ${error.lastname ? styles.inputError : ''}`}
        type="text"
        name="lastname"
        onChange={handleChange}
      />
      <label
        className={styles.label}
        htmlFor="dni">
        Nro. de Documento
      </label>
      <input
        className={`${styles.input} ${error.dni ? styles.inputError : ''}`}
        type="text"
        name="dni"
        onChange={handleChange}
      />
      <label
        htmlFor="email"
        className={styles.label}>
        E-mail
      </label>
      <input
        className={`${styles.input} ${error.email ? styles.inputError : ''}`}
        type="text"
        name="email"
        onChange={handleChange}
      />
      <label
        htmlFor="password"
        className={styles.label}>
        Contraseña
      </label>
      <input
        className={`${styles.input} ${error.password ? styles.inputError : ''}`}
        type="password"
        name="password"
        onChange={handleChange}
      />
      <label
        htmlFor="passwordConfirm"
        className={styles.label}>
        Confirmar Contraseña
      </label>
      <input
        className={`${styles.input} ${
          error.passwordConfirm ? styles.inputError : ''
        }`}
        type="password"
        name="passwordConfirm"
        onChange={handleChange}
      />
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          type="radio"
          name="userRol"
          value="alumno"
          onChange={handleChange}
          defaultChecked={true}
        />
        <label
          htmlFor="userRol"
          className={styles.checkboxLabel}>
          Soy Alumno
        </label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          type="radio"
          name="user-rol"
          value="profesor"
          onChange={handleChange}
        />
        <label
          htmlFor="user-rol"
          className={styles.checkboxLabel}>
          Soy Profesor
        </label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="termsandconditions"
          onChange={handleChange}
        />
        <label
          htmlFor="termsandconditions"
          className={styles.checkboxLabel}>
          Acepto términos y condiciones
        </label>
      </div>
      <div className={styles.btnSubmitContainer}>
        <input
          className={styles.btnSubmit}
          type="submit"
          value="Registrarse"
          onClick={handleRoute}
        />
      </div>
    </form>
  );
};
