'use client';
import React from 'react';
import { useState } from 'react';
import styles from '../styles/subirpdf.module.scss';
import { MdCloudUpload, MdDelete } from 'react-icons/md';

export const Subirpdf = () => {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('No seleccionado');

  const handleFileInputClick = () => {
    const fileInput = document.querySelector(
      '.input'
    ) as HTMLInputElement | null;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileInputChange = ({ target: { files } }: any) => {
    if (files && files[0]) {
      setFileName(files[0].name);
      setFile(URL.createObjectURL(files[0]));
    }
  };

  const handleDeleteClick = () => {
    setFileName('No seleccionado');
    setFile('');
  };

  return (
    <div>
      <h3>Carga tu archivo aquí</h3>
      <form
        className={styles.form}
        action=""
        onClick={handleFileInputClick}
        onChange={handleFileInputChange}>
        <input type="file" accept=".pdf" className={styles.input} />
        {file ? (
          <img src={file} alt="Upload" width={150} height={150} />
        ) : (
          <MdCloudUpload size={80} />
        )}
      </form>
      <section className={styles.upload}>
        <span className={styles.uploadspan}>
          {fileName}
          <MdDelete onClick={handleDeleteClick} />
        </span>
      </section>
    </div>
  );
};
