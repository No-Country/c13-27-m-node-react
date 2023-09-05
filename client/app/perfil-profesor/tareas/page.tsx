import { useState, useEffect } from 'react';

const TareasProfesor = () => {
  const [pdfContent, setPdfContent] = useState<string>('');

  //   ASYNC AWAIT
  //   useEffect(() => {
  //     const getPdf = async () => {
  //         try {
  //         const res = await fetch();
  //         const data = await res.json();
  //         setPdfContent(data);
  //       } catch (error) {
  //         console.log('Error fetching pdf documents', error);
  //       }
  //     };
  //   }, []);

  // PROMISE
  // useEffect(() => {
  //   fetch();
  //   .then(response => response.blob())  -> blob para pdfs?
  //   .then(blob => {
  //     const url = URL.createObjectURL(blob);
  //     setPdfContent(url);
  // })
  // .catch(error => {
  //     console.log('Error fetching pdf documents', error);
  // })
  // }, []);

  return (
    <div>
      <h2> Trabajos entregados </h2>
      {/* <iframe src={pdfContent} frameborder="0"></iframe> */}
    </div>
  );
};

export default TareasProfesor;






// const TareasProfesor = () => {
//   return (
//     <main>
//       <h1>Tareas Profesor</h1>
//     </main>
//   );
// };

// export default TareasProfesor;