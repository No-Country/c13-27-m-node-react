'use client';
import React, { ChangeEvent, useState } from 'react';
import styles from '../styles/formregister.module.scss';

interface UserRegister {
  'user-rol': 'alumno' | 'profesor';
  firstname: string;
  lastname: string;
  dni: string;
  email: string;
  password: string;
  'password-confirm': string;
  termsandconditions: boolean;
}

const initialForm: UserRegister = {
  'user-rol': 'alumno',
  firstname: '',
  lastname: '',
  dni: '',
  email: '',
  password: '',
  'password-confirm': '',
  termsandconditions: false,
};

export const FormRegister = () => {
  const [registerForm, setRegisterForm] = useState<UserRegister>(initialForm);

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    // Special handling for checkboxes
    const inputValue = type === 'checkbox' ? checked : value;

    setRegisterForm({
      ...registerForm,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //Validaciones
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
        className={styles.input}
        type="text"
        name="firstname"
        onChange={handleForm}
      />
      <label
        htmlFor="lastname"
        className={styles.label}>
        Apellido
      </label>
      <input
        className={styles.input}
        type="text"
        name="lastname"
        onChange={handleForm}
      />
      <label
        className={styles.label}
        htmlFor="dni">
        Nro. de Documento
      </label>
      <input
        className={styles.input}
        type="text"
        name="dni"
        onChange={handleForm}
      />
      <label
        htmlFor="e-mail"
        className={styles.label}>
        E-mail
      </label>
      <input
        className={styles.input}
        type="text"
        name="e-mail"
        onChange={handleForm}
      />
      <label
        htmlFor="password"
        className={styles.label}>
        Contraseña
      </label>
      <input
        className={styles.input}
        type="password"
        name="password"
        onChange={handleForm}
      />
      <label
        htmlFor="password-confirm"
        className={styles.label}>
        Confirmar Contraseña
      </label>
      <input
        className={styles.input}
        type="password"
        name="password-confirm"
        onChange={handleForm}
      />
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          type="radio"
          name="user-rol"
          value="alumno"
          onChange={handleForm}
          checked={registerForm['user-rol'] === 'alumno'}
          defaultChecked={true}
        />
        <label
          htmlFor="user-rol"
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
          onChange={handleForm}
          checked={registerForm['user-rol'] === 'profesor'}
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
          onChange={handleForm}
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
          onChange={handleForm}
        />
      </div>
    </form>
  );
};
