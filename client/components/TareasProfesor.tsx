'use client';
import Image from 'next/image';
import styles from '../styles/tareas.module.scss';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';
import mainRoute from '../route';
import Link from 'next/link';

interface EventDetail {
  student: string;
  grade?: number;
  file: string;
  comments?: string;
  _id: string;
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
  const [comments, setComments] = useState<{ [eventId: string]: string }>({});
  const [urlRoute, setUrlRoute] = useState<string>('');
  const [viewBox, setViewBox] = useState<string | null>(null);

  const handleCommentChange = (eventId: string, comment: string) => {
    setComments({ ...comments, [eventId]: comment });
  };

  const sendComment = async (eventId: string, file: string) => {
    try {
      const response = await fetch(
        `${mainRoute}/assignments/${assignmentId}/comments/${file}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ comment: comments[eventId] }),
        }
      );
      if (response.ok) {
        setComments({ ...comments, [eventId]: '' });
        setViewBox(null);
        console.log('Comentario enviado con éxito para el evento:', eventId);
      } else {
        console.error('Error al enviar el comentario');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

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

  const handleDownloadPdf = (id: string) => {
    const url = `${mainRoute}/upload/downloadFile/${id}`;
    setUrlRoute(url);
  };

  return (
    <div>
      <h2 className={styles.title}>Trabajos entregados</h2>
      <div className={styles.containerPfd}>
        {Array.isArray(data) &&
          data?.map((assignment) => {
            console.log('Contenido de data:', data);
            return assignment.eventDetails.map((eventDetail) => {
              return (
                <div
                  key={eventDetail._id}
                  className={styles.pdfItem}>
                  <Link
                    className={styles.linkContainer}
                    href={urlRoute}
                    onClick={() => handleDownloadPdf(eventDetail.file)}>
                    <Image
                      src="/assets/pdf-icon.svg"
                      alt="icono de un doc pdf"
                      width={40}
                      height={40}
                      className={styles.pdfImage}
                      key={eventDetail._id}
                    />
                    <p className={styles.pdfTitle}>{eventDetail.file}</p>
                  </Link>
                  <p
                    className={styles.comentariosP}
                    onClick={() => setViewBox(eventDetail._id)}>
                    Comentarios
                  </p>
                  {viewBox === eventDetail._id && (
                    <div className={styles.commentsContainer}>
                      <textarea
                        rows={5}
                        value={comments[eventDetail._id] || ''}
                        onChange={(e) =>
                          handleCommentChange(eventDetail._id, e.target.value)
                        }
                        placeholder="Escribe tu comentario"
                        className={styles.comments}
                      />
                      <button
                        onClick={() =>
                          sendComment(eventDetail._id, eventDetail.file)
                        }
                        className={styles.btnEnviar}>
                        ENVIAR
                      </button>
                    </div>
                  )}
                </div>
              );
            });
          })}
      </div>
    </div>
  );
};

export default TareasProfesorComponent;
