const estudiante = {
    matricula: 'A01029211',
    nombre : 'Jorge',
    edad : 10,
    direccion : {
        ciudad : 'Monterrey',
        cp: '05120'
    }
};

// console.table(estudiante);
console.log(estudiante);

const estudiante2 = {...estudiante};
estudiante2.nombre = 'Santaigo';

console.log(estudiante2)