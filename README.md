###Plataforma Universitaria

#Rutas:

## Rutas de profesores

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
