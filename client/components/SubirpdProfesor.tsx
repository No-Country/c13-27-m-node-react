'use client';
import React from 'react';
import { useState, useRef } from 'react';
import styles from '../styles/subirpdf.module.scss';
import { MdDelete, MdFileUpload } from 'react-icons/md';
import { useAppContext } from '../context/userContext';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Params {
  assignment: string;
}

export const SubirpdfProfesor = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('No seleccionado');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const assignmentId = useParams() as unknown as Params;
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
      toast.error('Selecciona un archivo antes de subir');
      return;
    }

    if (!id) {
      toast.error('ID del profesor no encontrado');
      return;
    }

    if (!assignmentId || !assignmentId.assignment) {
      toast.error('ID de materia no encontrado');
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', file);
    formData.append('studentId', id);
    formData.append('assignmentId', assignmentId.assignment);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        toast.success('Archivo subido con éxito!');
      } else {
        const responseData = await response.json();
        toast.error('Error, por favor vuelve a intentarlo');
      }
    } catch (error) {
      toast.error('Error al subir archivo');
    }
  };

  return (
    <div className={styles.containerProfesor}>
      <h3 className={styles.titlefirst}>Cargar material de estudio</h3>
      <div className={styles.containerUploadProfesor}>
        <form
          className={styles.formProfesor}
          action=""
          onClick={handleFileInputClick}>
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

      <button
        className={styles.btn}
        onClick={handleUploadClick}>
        Subir Archivo
      </button>
    </div>
  );
};
