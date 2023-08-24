'use client';
import React, { useState, useEffect } from 'react';
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
  const [error, setError] = useState<
    Partial<Record<keyof UserRegister, string>>
  >({});
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (
      registerForm.dni !== '' &&
      registerForm.firstname !== '' &&
      registerForm.email !== '' &&
      registerForm.lastname !== '' &&
      registerForm.password !== '' &&
      registerForm.passwordConfirm !== '' &&
      registerForm.termsandconditions !== false
    ) {
      if (Object.keys(error).length === 0) {
        setSubmitDisabled(true);
      } else {
        setSubmitDisabled(false);
      }
    }
  }, [error, registerForm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    const regexDni = /^[0-9]*$/;
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    const newErrors: Partial<Record<keyof UserRegister, string>> = {};

    if (!value) {
      newErrors[name as keyof UserRegister] = 'Campo obligatorio';
    } else {
      if (name === 'firstname' && !regexName.test(value)) {
        newErrors[name] = 'Inválido';
      } else if (name === 'lastname' && !regexName.test(value)) {
        newErrors[name] = 'Inválido';
      } else if (name === 'dni' && !regexDni.test(value)) {
        newErrors[name] = 'Inválido';
      } else if (name === 'email' && !regexEmail.test(value)) {
        newErrors[name] = 'Inválido';
      }
    }
    if (name === 'password' && !value) {
      newErrors.password = 'Debes elegir una contraseña';
    }
    if (name === 'passwordConfirm' && value !== registerForm.password) {
      newErrors.passwordConfirm = 'Las contraseñas no coinciden';
    }
    if (name === 'termsandconditions' && !checked) {
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
      router.push('/login');
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
          name="userRol"
          value="profesor"
          onChange={handleChange}
        />
        <label
          htmlFor="userRol"
          className={styles.checkboxLabel}>
          Soy Profesor
        </label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          defaultChecked={false}
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
          disabled={!submitDisabled}
          type="submit"
          value="Registrarse"
          onClick={handleRoute}
        />
      </div>
    </form>
  );
};
