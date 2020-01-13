fetch('http://localhost:4000/pacientes')
    .then(result => result.json())
    .then(datos => console.log(datos))
