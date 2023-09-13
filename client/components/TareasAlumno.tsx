'use client';
import { useAppContext } from '../context/userContext';
import styles from '../styles/tareas.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import mainRoute from '../route';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Assignment {
  date: string;
  type: string;
  _id: string;
  eventDetails: {
    student: string;
    file: string;
    _id: string;
    comments?: string;
  }[];
}

const TareasAlumnoComponent = () => {
  const { userRegister } = useAppContext();
  const studentId = userRegister._id;
  const assignment_id = useParams();
  const assignmentId = assignment_id.assignment;
  const [viewerPdf, setViewerPdf] = useState<Assignment[]>([]);
  const [urlRoute, setUrlRoute] = useState<string>('');
  const [showComments, setShowComments] = useState<string | null>(null);
  const [areCommentsOpen, setAreCommentsOpen] = useState(false);

  useEffect(() => {
    const getPdfStudent = async () => {
      try {
        const res = await fetch(
          `${mainRoute}/assignments/${assignmentId}/events/${studentId}`
        );
        const data = await res.json();
        setViewerPdf(data);
      } catch (error) {
        console.log('Error fetch obteniendo pdfs del estudante', error);
      }
    };
    getPdfStudent();
  }, [assignmentId, studentId]);

  const handleDownloadPdf = (id: string) => {
    const url = `${mainRoute}/upload/downloadFile/${id}`;
    setUrlRoute(url);
  };

  return (
    <div>
      <h1 className={styles.title}>Tus trabajos</h1>
      <div className={styles.containerPfd}>
        {Array.isArray(viewerPdf) &&
          viewerPdf.map((assignment, index) => (
            <div key={index}>
              {assignment.eventDetails.map((detail, detailIndex) => (
                <div key={detailIndex}>
                  <Link
                    className={styles.linkContainer}
                    href={urlRoute}
                    target="_blank"
                    onClick={() => handleDownloadPdf(detail.file)}>
                    <Image
                      src="/assets/pdf-icon.svg"
                      alt="icono de un doc pdf"
                      width={40}
                      height={40}
                      className={styles.pdfImage}
                    />
                    <p className={styles.pdfTitle}>{detail.file}</p>
                  </Link>
                  <div className={styles.commentsContainerStudent}>
                    <p
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setAreCommentsOpen((prevState) => !prevState);
                        setShowComments(detail.comments || null);
                      }}>
                      Comentarios
                    </p>

                    {showComments === detail.comments && (
                      <p>{detail.comments}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TareasAlumnoComponent;
