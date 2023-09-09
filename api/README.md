# EDUCAPP - Plataforma Universitaria

## API DOCUMENTATION

1. **Crear un archivo .env con las siguientes variables:**
   - PORT : puerto donde se correrá la aplicación.
   - DB : la URI a la base de datos en Mongo.
2. **Instalar dependencias con 'npm i'**
3. **Si se trabaja en local (o si la base de datos de Mongo está vacía), correr 'npm run seed' para seedear la DB**
4. **Correr la aplicación con 'npm run dev' (development) o 'npm start' (production)**
5. **Paginado**: Para rutas paginadas, el objeto devuelto se conforma de la siguiente manera:

| obj (students OR teachers) |
| -------------------------- |
| {                          |
| obj: docs,                 |
| hasPrevPage,               |
| hasNextPage,               |
| nextPage,                  |
| prevPage,                  |
| totalPages,                |
| }                          |

<hr>

## Estudiantes

**Student Routes**

| TIPO | DETALLES                                                                                                                                                        | RUTA                                               |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| GET  | Devuelve todos los estudiantes como array de objetos paginados de a 10                                                                                          | http://localhost:PORT/students/allStudents         |
| POST | Inicia sesión, pide: (email, password, check)                                                                                                                   | http://localhost:PORT/students/studentsLogin       |
| GET  | Busca un estudiante por ID, devuelve el objeto                                                                                                                  | http://localhost:PORT/students/:id                 |
| POST | Ruta para registro de un estudiante. Devuelve un mensaje (string) de éxito o error. Le llega la información en el body como objeto JSON                         | http://localhost:PORT/students/registerStudent     |
| PUT  | Ruta para selección de carrera y materias. Devuelve un objeto con el perfil actualizado. Recibe el id del alumno por param y la carrera y las materias por body | http://localhost:PORT/students/careerSelection/:id |

**Student Schema**

| KEY         | TIPO      | REQUIRED  | EJEMPLO                    |
| ----------- | --------- | --------- | -------------------------- |
| \_id        | Object ID | SI, UNICO | "64e4a974d87cf57457bd98ce" |
| firstName   | String    | SI        | "Juan"                     |
| lastName    | String    | SI        | "Perez"                    |
| dni         | Number    | SI, UNICO | 35000000                   |
| password    | String    | SI        | "123456"                   |
| email       | String    | SI,UNICO  | "juanperez@hotmail.com"    |
| assignments | [String]  | NO        | [ "Matemática", "Física" ] |
| career      | String    | NO        | "Ingeniería"               |

<hr>

## Profesores

**Teacher Routes**

| TIPO | DETALLES                                                                                                                                   | RUTA                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| GET  | Devuelve todos los profesores como array de objetos (JSON) paginados de a 10                                                               | http://localhost:PORT/teachers/allTeachers              |
| POST | Inicia sesión, pide: (email, password, check)                                                                                              | http://localhost:PORT/teachers/teachersLogin            |
| GET  | Devuelve un profesor a través del ID                                                                                                       | http://localhost:PORT/teachers/:id                      |
| POST | Ruta para registro de un profesor. Devuelve un mensaje (string) de éxito o error. Le llega la información en el body como objeto JSON      | http://localhost:PORT/teachers/registerTeacher          |
| PUT  | Ruta para selección de materias. Devuelve un objeto con el perfil actualizado. Recibe el id del profesor por param y las materias por body | http://localhost:PORT/teachers/assignmentsSelection/:id |


**Teacher Schema**

| KEY         | TIPO      | REQUIRED  | EJEMPLO                                                     |
| ----------- | --------- | --------- | ----------------------------------------------------------- |
| \_id        | Object ID | SI, UNICO | "64e65a901e27ff1cee9441ef"                                  |
| firstName   | String    | SI        | "Ernesto"                                                   |
| lastName    | String    | SI        | "Batista"                                                   |
| dni         | Number    | SI, UNICO | 25000000                                                    |
| password    | String    | SI        | "123456"                                                    |
| email       | String    | SI,UNICO  | "batista@hotmail.com"                                       |
| assignments | Object ID | NO        | [ { "_id" : "64f8cca3f461097b02a1038f", "name": "Física"} ] |

<hr>

## Carreras

**Career Routes**

| TIPO | DETALLES                                          | RUTA                                     |
| ---- | ------------------------------------------------- | ---------------------------------------- |
| GET  | Devuelve todas los carreras como array de objetos | http://localhost:PORT/careers/allCareers |
| GET  | Devuelve una carrera a través del ID              | http://localhost:PORT/careers/:id        |

**Career Schema**

| KEY         | TIPO        | REQUIRED  | EJEMPLO                                                 |
| ----------- | ----------- | --------- | ------------------------------------------------------- |
| \_id        | Object ID   | SI, UNICO | "64e65a8f17789b43bf724ca9"                              |
| name        | String      | SI        | "Ingeniería"                                            |
| students    | [Object ID] | NO        | ["64e658c0c2088908dd408c51"]                            |
| assignments | [Object ID] | NO        | ["64e657d99817b684985962bb","64e657d99817b684985962bc"] |

<hr>

## Materias

**Assignment Routes**

| TIPO | DETALLES                                                                                                | RUTA                                                     |
| ---- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| GET  | Devuelve todas los materias como array de objetos                                                       | http://localhost:PORT/assignments/allAssignments         |
| GET  | Devuelve una materia a través del ID                                                                    | http://localhost:PORT/assignments/:id                    |
| GET  | Devuelve todas las entregas de la materia a través del ID                                               | http://localhost:PORT/assignments/:id/entregas           |
| GET  | Devuelve un array con todos los eventos de ese alumno o un array vacio si no se encontro                | http://localhost:PORT/assignments/:aid/events/:sid       |
| PUT  | Recibe un ID por parametro y strings de links por body, devuelve la materia actualizada                 | http://localhost:PORT/:id/uploadLinks                    |
| POST | Recibe ID de materia + filename por parametro junto con comment por body, devuelve la entrega con el comentario nuevo | http://localhost:PORT/:id/comments/:fileName             |

**Assignment Schema**

| KEY                 | TIPO        | REQUIRED  | EJEMPLO                                                                             |
| ------------------- | ----------- | --------- | ----------------------------------------------------------------------------------- |
| \_id                | Object ID   | SI, UNICO | "64e65a901e27ff1cee9441ef"                                                          |
| name                | String      | SI        | "Matemática"                                                                        |
| days                | [String]    | NO        | ["Lunes", "Martes" ]                                                                |
| schedule            | String      | NO        | "10 AM a 12 PM"                                                                     |
| classroom           | String      | NO        | "Aula 4G"                                                                           |
| links               | [String]    | NO        | ["https://drive.com/descargadearchivo.exe]                                          |
| fileNames           | [String]    | NO        | ["Material Teórico Derecho 1"]                                                      |
| teachers            | [Object ID] | NO        | ["64e658c0c2088908dd408c51"]                                                        |
| students            | [Object ID] | NO        | ["64e658c0c2088908dd408c51","64e658c0c2088908dd408c52" ]                            |
| events              | [Schema]    | NO        | [{"type": "Entrega", "eventDetails": [{Obj}] }]                                     |
| events.eventDetails | [Object ID] | NO        | [{"student": {Object ID}, "grade": 0, "file": "TP1.pdf", "comments": "Muy bueno" }] |

<hr>

## Uploads
**Uploads Routes**

| TIPO | DETALLES                                                                                                                      | RUTA                                                |
| ---- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| POST | Recibe assignmentId por body un archivo pdf . Devuelve el nombre generado del archivo en el servidor.                         | http://localhost:PORT/upload                        |
| GET  | Recibe assignmentId por query y devuelve los nombres de los archivos de esa materia (con ese nombre luego pueden descargarlo) | http://localhost:PORT/upload/allClasses             |
| GET  | Recibe fileName por params y devuelve el archivo (se descarga)                                                                | http://localhost:PORT/upload/downloadFile/:fileName |
| POST | Recibe assignmentId y studentId por body y devuelve el nombre generado del archivo en el servidor                             | http://localhost:PORT/upload/entrega                |

