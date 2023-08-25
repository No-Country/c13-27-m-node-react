#Rutas:

## Estudiantes <br/>
- GET: /students/allStudents // Devuelve todos los estudiantes como array de objetos. Ej: <br />
    - [<br />
        {<br />
            "_id": "64e4a974d87cf57457bd98ce",<br />
            "firstName": "Juan",<br />
            "lastName": "Perez",<br />
            "email": "juanperez@hotmail.com",<br />
            "dni": 35000000,<br />
            "dob": "1970-01-01T00:00:00.000Z",<br />
            "address": "Jujuy 1234",<br />
            "assignments": [<br />
            "Matemática",<br />
            "Física"<br />
            ],<br />
            "career": "Ingeniería",<br />
            "__v": 0<br />
        }]<br />
<br />

- POST: /students/registerStudent // Ruta para registro de un estudiante. Devuelve un mensaje (string) de éxito o error. Le llega la información en el body como objeto JSON: <br />
  - {<br />
  firstName: 'Juan',<br />
  lastName: 'Perez',<br />
  password: '123456',<br />
  email: 'juanperez@hotmail.com',<br />
  dni: 35000000,<br />
  dob: 10 / 12 / 1990,<br />
  address: 'Jujuy 1234',<br />
  assignments: [<br />
    '64e3ee47f320e0e862986c40', // Matematica<br />
    '64e3ee47f320e0e862986c41', // Fisica<br />
  ],<br />
  career: 'Ingeniería',<br />}<br />

<hr />

## Profesores <br/>
- GET: teachers/allTeachers // Ruta para obtener todos los profesores paginados de a 10. No recibe parámetros y devuelve (en caso de éxito) un objeto de objetos json de la siguiente manera: <br />
 - {<br />
  "teachers": [<br />
    {<br />
      "_id": "64e771318a9c528185a986f2",<br />
      "firstName": "Ernesto",<br />
      "lastName": "Batista",<br />
      "password": "123456",<br />
      "email": "batista@hotmail.com",<br />
      "dni": 25000000,<br />
      "dob": "1970-01-01T00:00:00.000Z",<br />
      "address": "Salta 123",<br />
      "assignments": [<br />
        "64e3ee47f320e0e862986c40",<br />
        "64e3ee47f320e0e862986c41"<br />
      ],<br />
      "__v": 0,<br />
      "id": "64e771318a9c528185a986f2"<br />
    }<br />
  ],<br />
  "hasPrevPage": false,<br />
  "hasNextPage": false,<br />
  "nextPage": null,<br />
  "prevPage": null,<br />
  "totalPages": 1<br />}<br /> <br />

- GET: /teachers/teachersLogin // Ruta de login de profesor. Devuelve mensaje de éxito o error. Le llega por body: <br />
  - email <br />
  - password <br />
  - check // Debe ser igual a 'teacher'<br />
  <br />

- POST: /teachers/registerTeacher // Ruta de registro de un nuevo profesor. Devuelve mensaje de éxito o error. Le llega por body: <br />
   {<br />
      firstName,<br />
      lastName,<br />
      password,<br />
      email,<br />
      dni,<br />
      dob,<br />
      address,<br />
      assignments,<br />
    } <br /><br />

<hr />