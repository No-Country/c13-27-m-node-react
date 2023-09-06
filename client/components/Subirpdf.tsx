'use client';
import React from 'react';
import { useState, useRef } from 'react';
import styles from '../styles/subirpdf.module.scss';
import { MdCloudUpload, MdDelete } from 'react-icons/md';

export const Subirpdf = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('No seleccionado');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFileName(files[0].name);
      setFile(files[0]);
    }
  };

  const handleDeleteClick = () => {
    setFileName('No seleccionado');
    setFile(null);
  };

  return (
    <div>
      <h3>Carga tu archivo aquí</h3>
      <form className={styles.form} action="" onClick={handleFileInputClick}>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className={styles.input}
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
        />
        <div className={styles.iconContainer}>
          {file ? 'PDF Seleccionado' : <MdCloudUpload size={80} />}
        </div>
      </form>
      <section className={styles.upload}>
        <span className={styles.uploadspan}>
          {fileName}
          <MdDelete style={{ cursor: 'pointer' }} onClick={handleDeleteClick} />
        </span>
      </section>
    </div>
  );
};
