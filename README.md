# EDUCAPP - Plataforma Universitaria



## API DOCUMENTATION

1. **Crear un archivo .env con las siguientes variables:**
   - PORT : puerto donde se correrá la aplicación.
   - DB : la URI a la base de datos en Mongo.
2. **Instalar dependencias con 'npm i'**
3. **Si se trabaja en local (o si la base de datos de Mongo está vacía), correr 'npm run seed' para seedear la DB**
4. **Correr la aplicación con 'npm run dev' (development) o 'npm start' (production)**
5. **Paginado**: Para rutas paginadas, el objeto devuelto se conforma de la siguiente manera:

obj (students OR teachers)
|-------------|
|{            |
|obj: docs,   |
|hasPrevPage, |
|hasNextPage, |
|nextPage,    |
|prevPage,    |
|totalPages,  |
|}            |

## Estudiantes

**Student Routes**

| TIPO | DETALLES                                                               | RUTA                                           |
| ---- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| GET  | Devuelve todos los estudiantes como array de objetos paginados de a 10 | http://localhost:PORT/students/allStudents     |
| POST | Inicia sesión, pide: (email, password, check)                          | http://localhost:PORT/students/studentsLogin   |
| GET  | Busca un estudiante por ID, devuelve el objeto                         | http://localhost:PORT/students/:id             |
| POST | Ruta para registro de un estudiante. Devuelve un mensaje (string) de éxito o error. Le llega la información en el body como objeto JSON          | http://localhost:PORT/students/registerStudent |

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

## Profesores

**Teacher Routes**

| TIPO | DETALLES                                                              | RUTA                                           |
| ---- | --------------------------------------------------------------------- | ---------------------------------------------- |
| GET  | Devuelve todos los profesores como array de objetos (JSON) paginados de a 10 | http://localhost:PORT/teachers/allTeachers     |
| POST | Inicia sesión, pide: (email, password, check)                         | http://localhost:PORT/teachers/teachersLogin   |
| GET  | Devuelve un profesor a través del ID                                  | http://localhost:PORT/teachers/:id             |
| POST | Ruta para registro de un profesor. Devuelve un mensaje (string) de éxito o error. Le llega la información en el body como objeto JSON         | http://localhost:PORT/teachers/registerTeacher |

**Teacher Schema**

| KEY         | TIPO      | REQUIRED  | EJEMPLO                    |
| ----------- | --------- | --------- | -------------------------- |
| \_id        | Object ID | SI, UNICO | "64e65a901e27ff1cee9441ef" |
| firstName   | String    | SI        | "Ernesto"                  |
| lastName    | String    | SI        | "Batista"                  |
| dni         | Number    | SI, UNICO | 25000000                   |
| password    | String    | SI        | "123456"                   |
| email       | String    | SI,UNICO  | "batista@hotmail.com"      |
| assignments | [String]  | NO        | [ "Matemática", "Física" ] |

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

## Materias

**Assignment Routes**

| TIPO | DETALLES                                          | RUTA                                             |
| ---- | ------------------------------------------------- | ------------------------------------------------ |
| GET  | Devuelve todas los materias como array de objetos | http://localhost:PORT/assignments/allAssignments |
| GET  | Devuelve una materia a través del ID              | http://localhost:PORT/assignments/:id            |

**Assignment Schema**

| KEY      | TIPO        | REQUIRED  | EJEMPLO                                                  |
| -------- | ----------- | --------- | -------------------------------------------------------- |
| \_id     | Object ID   | SI, UNICO | "64e65a901e27ff1cee9441ef"                               |
| name     | String      | SI        | "Matemática"                                             |
| teachers | [Object ID] | NO        | ["64e658c0c2088908dd408c51"]                             |
| students | [Object ID] | NO        | ["64e658c0c2088908dd408c51","64e658c0c2088908dd408c52" ] |
| exams    | [String]    | NO        | ["Algoritmos","Integrales","Funciones"]                  |
