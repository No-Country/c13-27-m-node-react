'use client';
import Image from 'next/image';
import styles from '../styles/tareas.module.scss';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';
import mainRoute from '../route';
import Link from 'next/link';

// import { ObjectId } from 'mongoose';

interface EventDetail {
  student: string;
  grade?: number;
  file: string;
  comments?: string;
  _id: string;
  // _id: Object;
}

interface Assignment {
  date: string;
  type: string;
  _id: string;
  eventDetails: EventDetail[];
}

const TareasProfesorComponent = () => {
  const assignment_id = useParams();
  const assignmentId = assignment_id.assignment;
  const [data, setData] = useState<Assignment[]>([]);
  const [comentario, setComentario] = useState('');

  useEffect(() => {
    const getPdfsForAssignments = async () => {
      try {
        const res = await fetch(
          `${mainRoute}/assignments/${assignmentId}/entregas`
        );
        const responseData = await res.json();
        setData(responseData);

        console.log('Datos de la API:', responseData);
      } catch (error) {
        console.log('Error en el fetch del pdf', error);
      }
    };
    getPdfsForAssignments();
  }, [assignmentId]);

  console.log(data);

  return (
    <div>
      <h2 className={styles.title}>Trabajos entregados</h2>
      <div className={styles.containerPfd}>
        {
        
          data?.map((assignment) =>
            assignment.eventDetails.map((eventDetail, index) => (
              <div key={eventDetail._id} className={styles.pdfItem}>
                <Link href={eventDetail.file} target="_blank">
                  <Image
                    src="/assets/pdf-icon.svg"
                    alt="icono de un doc pdf"
                    width={40}
                    height={40}
                    className={styles.pdfImage}
                  />
                  <p> {eventDetail.file} </p>
                </Link>
                <div>
                  <textarea
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    placeholder="Escribe tu comentario"
                  />
                </div>
              </div>
            ))
          )}
      </div>

      
    </div>
  );
};

export default TareasProfesorComponent;
