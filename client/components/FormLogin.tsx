'use client';
import { useState } from 'react';

interface UserLogin {
  dni: string;
  password: string;
}

const initialForm: UserLogin = {
  dni: '',
  password: '',
};

const FormLogin = () => {
  const [loginForm, setLoginForm] = useState<UserLogin>(initialForm);

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //TODO VALIDACIONES
    setLoginForm(loginForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="dni">DNI</label>
      <input
        type="text"
        name="dni"
        onChange={handleForm}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        name="password"
        onChange={handleForm}
      />
      <input
        type="submit"
        value="Ingresar"
      />
    </form>
  );
};

export default FormLogin;
