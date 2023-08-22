import React from 'react';
import variables from '../styles/variables.module.scss';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Plataforma Universitaria',
};

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

const page = () => {
  return <h1 style={{ color: variables.primaryColor }}>El futuro es hoy</h1>;
};

export default page;
