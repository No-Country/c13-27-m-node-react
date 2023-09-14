'use client';
import { useAppContext } from '../context/userContext';
import styles from '../styles/tareas.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import mainRoute from '../route';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { AssignmentStudent } from '../interfaces/interfaces';
import { Assignment } from '../interfaces/interfaces';

interface UserEvents {
  eventType: string;
  grade: number;
  file: string;
  comments: string;
}

const TareasAlumnoComponent = () => {
  const { userRegister } = useAppContext();
  const studentId = userRegister._id;
  const assignment_id = useParams();
  const [viewerPdf, setViewerPdf] = useState<UserEvents[]>([]);
  const [urlRoute, setUrlRoute] = useState<string>('');
  const [showComments, setShowComments] = useState<string | null>(null);
  const [openComments, setOpenComments] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assignmentResponse = await fetch(
          `${mainRoute}/assignments/${assignment_id.assignment}`
        );
        const assignmentData = await assignmentResponse.json();

        const studentResponse = await fetch(
          `${mainRoute}/students/${studentId}`
        );
        const studentData = await studentResponse.json();

        const match = studentData.assignmentDataForStudent.find(
          (assignment: Assignment) => assignment.name === assignmentData.name
        );

        const eventTypeMatch = match.events.filter(
          (tipoEvento: any) => tipoEvento.eventType === 'Entrega'
        );
        setViewerPdf(eventTypeMatch);
        console.log(eventTypeMatch);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDownloadPdf = (id: string) => {
    const url = `${mainRoute}/upload/downloadFile/${id}`;
    setUrlRoute(url);
  };

  return (
    <div>
      <h1 className={styles.title}>Tus trabajos</h1>
      <div className={styles.containerPfd}>
        {viewerPdf.map((entrega, index) => (
          <div key={index}>
            <Link
              className={styles.linkContainer}
              href={urlRoute}
              target="_blank"
              onClick={() => handleDownloadPdf(entrega.file)}>
              <Image
                src="/assets/pdf-icon.svg"
                alt="icono de un doc pdf"
                width={40}
                height={40}
                className={styles.pdfImage}
              />
              <p className={styles.pdfTitle}>{entrega.file}</p>
            </Link>
            <div className={styles.commentsContainerStudent}>
              <p
                className={styles.comment}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setOpenComments((prevOpenComments) => ({
                    ...prevOpenComments,
                    [index]: !prevOpenComments[index],
                  }));
                  setShowComments(entrega.comments || null);
                }}>
                Comentarios
              </p>
              {openComments[index] && (
                <div>
                  {showComments === entrega.comments ? (
                    <p className={styles.comment}>{entrega.comments}</p>
                  ) : (
                    <p className={styles.comment}>
                      Esta entrega aún no recibió comentarios de tu profesor
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TareasAlumnoComponent;
