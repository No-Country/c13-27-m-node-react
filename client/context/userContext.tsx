'use client';
import React, { createContext, useContext, useState } from 'react';
import { UserLogin, UserRegister } from '../interfaces/interfaces';

interface AppContextType {
  userRegister: UserRegister;
  setUserRegister: React.Dispatch<React.SetStateAction<UserRegister>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialUser: UserRegister = {
  id: '',
  userRol: 'student',
  firstname: '',
  lastname: '',
  dni: '',
  email: '',
  password: '',
  passwordConfirm: '',
  termsandconditions: false,
  carreer: '',
  assignments: [],
};

const initialUserLogged: UserLogin = {
  dni: '',
  password: '',
  userRol: 'student',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      'useAppContext debe ser utilizado dentro de un proveedor AppContext'
    );
  }
  return context;
};

export function AppProvider({ children }: React.PropsWithChildren<{}>) {
  const [userRegister, setUserRegister] = useState<UserRegister>(initialUser);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const contextValue: AppContextType = {
    userRegister,
    setUserRegister,
    isLogged,
    setIsLogged,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
