###Plataforma Universitaria

#Rutas:

- GET: /allUsers | Devuelve todos los usuarios como array de objetos. Ej: 
    - [
        {
            "_id": "64e4a974d87cf57457bd98ce",
            "firstName": "Juan",
            "lastName": "Perez",
            "email": "juanperez@hotmail.com",
            "dni": 35000000,
            "dob": "1970-01-01T00:00:00.000Z",
            "address": "Jujuy 1234",
            "assignments": [
            "Matemática",
            "Física"
            ],
            "career": "Ingeniería",
            "__v": 0
        }]

- GET '/allTeachers' // Ruta para obtener todos los profesores paginados de a 10. No recibe parámetros y devuelve (en caso de éxito) un objeto json de la siguiente manera: <br />
{ <br />
    teachers: docs,<br />
    hasPrevPage,<br />
    hasNextPage,<br />
    nextPage,<br />
    prevPage,<br />
    totalPages,<br />
  }<br />
- GET '/teachersLogin',
- POST '/registerTeacher'

- POST: /registerStudent

En caso de éxito, devuelve: "Usted se registró correctamente"
