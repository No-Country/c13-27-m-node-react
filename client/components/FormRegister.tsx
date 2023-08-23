'use client';
import React, { ChangeEvent, useState } from 'react';
import styles from '../styles/formregister.module.scss';

interface UserRegister {
  'user-rol': 'alumno' | 'profesor';
  fullname: string;
  dni: string;
  email: string;
  password: string;
  'password-confirm': string;
  termsandconditions: boolean;
}

const initialForm: UserRegister = {
  'user-rol': 'alumno',
  fullname: '',
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

    //TODO VALIDACIONES
    setRegisterForm(registerForm);
  };

  console.log(registerForm);
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.background}>
      <label htmlFor="user-rol">Alumno</label>
      <input
        type="radio"
        name="user-rol"
        value="alumno"
        onChange={handleForm}
        checked={registerForm['user-rol'] === 'alumno'}
      />
      <label htmlFor="user-rol">Profesor</label>
      <input
        type="radio"
        name="user-rol"
        value="profesor"
        onChange={handleForm}
        checked={registerForm['user-rol'] === 'profesor'}
      />
      <label htmlFor="fullname">Nombre Completo</label>
      <input
        type="text"
        name="fullname"
        onChange={handleForm}
      />
      <label htmlFor="dni">DNI</label>
      <input
        type="text"
        name="dni"
        onChange={handleForm}
      />
      <label htmlFor="e-mail">E-mail</label>
      <input
        type="text"
        name="e-mail"
        onChange={handleForm}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        name="password"
        onChange={handleForm}
      />
      <label htmlFor="password-confirm">Confirmar Contraseña</label>
      <input
        type="password"
        name="password-confirm"
        onChange={handleForm}
      />
      <label htmlFor="termsandconditions">Acepto Términos y Condiciones</label>
      <input
        type="checkbox"
        name="termsandconditions"
        onChange={handleForm}
      />
      <input
        type="submit"
        value="Registrarme"
        onChange={handleForm}
      />
    </form>
  );
};
