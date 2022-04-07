//Desestructuracion
//Asignacion Desestructurante
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//en caso de que se quiera renombrar
const { nombre:nombre2 } = persona;
console.log( nombre2 );

const { nombre, edad, clave, } = persona;
console.log( nombre, edad, clave );

// console.log( persona.edad );
// console.log( persona.clave );

//// Hacer la desestructuracion dentro de la funcion, reciviendo un objeto
// const retornaPersona = ( usuario ) => {
//     // console.log(usuario)
//     const { nombre, edad, clave, } = usuario;
//     console.log(edad, clave, nombre)
// };

// Realizar la desestructuracion en los parametros, reciviendo un objeto
// const retornaPersona = ( { nombre, edad, clave, } ) => {
//     // console.log(usuario)
//     console.log(edad, clave, nombre)
// };

//asiganar valores por default en la desestructuracion por si no vienen esos campos
const usContext = ( { nombre, edad, clave, rango = 'capitan' , } ) => {
    // console.log(usuario)
    // console.log(edad, rango, nombre)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.25465,
            lng: 33.58729,
        }
    }
};

const {nombreClave,anios,latlng:{ lat, lng }} = usContext( persona );

console.log( nombreClave,anios );
console.log( lat,lng );
