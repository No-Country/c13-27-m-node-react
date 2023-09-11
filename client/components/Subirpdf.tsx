'use client';
import React from 'react';
import { useState, useRef } from 'react';
import styles from '../styles/subirpdf.module.scss';
import { MdDelete, MdFileUpload } from 'react-icons/md';
import { useAppContext } from '../context/userContext';
import { useParams } from 'next/navigation';

export const Subirpdf = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('No seleccionado');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const assignmentId = useParams();
  const { userRegister } = useAppContext();
  const id = userRegister._id;

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

  const handleUploadClick = async () => {
    if (!file) {
      alert('Selecciona un archivo antes de subir');
      return;
    }

    if (!id) {
      alert('ID del estudiante no definido');
      return;
    }

    if (Array.isArray(assignmentId)) {
      alert('ID de asignación no válido');
      return;
    }

    if (!assignmentId || !assignmentId.assignment) {
      alert('ID de la asignación no definido');
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', file);
    formData.append('studentId', id);
    formData.append('assignmentId', assignmentId.assignment);
    console.log(assignmentId);

    try {
      const response = await fetch('http://localhost:3001/upload/entrega', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Archivo subido con éxito');
      } else {
        const responseData = await response.json();
        alert(`Error: ${responseData.message || 'Error al subir el archivo'}`);
      }
    } catch (error) {
      console.log('Error subiendo el archivo:', error);
      alert('Error al subir el archivo.');
    }
  };

  return (
    <div className={styles.container}>
      <h3>Carga tu archivo aquí</h3>
      <div className={styles.containerupload}>
        <form className={styles.form} action="" onClick={handleFileInputClick}>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            className={styles.input}
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
          />
          <div className={styles.iconcontainer}>
            {file ? 'PDF Seleccionado' : <MdFileUpload size={80} />}
          </div>
        </form>
      </div>
      <section className={styles.upload}>
        <span className={styles.uploadspan}>
          {fileName}
          <MdDelete
            style={{ cursor: 'pointer' }}
            size={20}
            onClick={handleDeleteClick}
          />
        </span>
      </section>

      <button className={styles.btn} onClick={handleUploadClick}>
        Subir Archivo
      </button>
    </div>
  );
};
