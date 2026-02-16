function saludar(nombre:String):string{
    return `Hola ${nombre}`;
}

//funciones de flecha
const saludarFlecha = (nombre:string):string => {
    return `Hola ${nombre}`;
}

const msg = saludar('Jorge');

const msg2 = saludarFlecha('Santiago');

console.log(msg);
console.log(msg2);


