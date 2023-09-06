'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import pdfIcon from '../public/assets/pdf-icon.svg';

export const MaterialEstudio = () => {
  /*   useEffect(() => {
    const getAssigmentData = async () => {
      const res = await fetch(
        'http://localhost:3001/upload/64f734cb524040c5839ba60f'
      );
      const data = await res.json();
      console.log(data);
    };
    getAssigmentData();
  }, []); */

  const pdfs = ['Titulo 1', 'Título 2', 'Título 3'];

  return (
    <section>
      {pdfs.map((pdf, index) => (
        <article key={index}>
          <Image
            src={pdfIcon}
            alt="pdf icon"
          />
          <p>{pdf}</p>
        </article>
      ))}
    </section>
  );
};
