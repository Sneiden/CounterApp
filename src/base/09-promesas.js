import { getHeroeById } from './08-imp-exp';


// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         //Tarea
//         //importen el getHeroeById
//         const p1 = getHeroeById(2);
//         resolve( p1 );
//         // reject( 'No se pudo encontrar el heroe' );
//     }, 2000);
// });

// promesa.then( ( heroe ) => {
//     console.log( 'Heroe: ',heroe );
// }).catch( err => console.warn( err ));

export const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //Tarea
            //importen el getHeroeById
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el heroe' );
            }
        }, 1500);
    });
};

// getHeroeByIdAsync(1)
//     .then( heroe => console.log('Heroe', heroe ))
//     .catch( err => console.warn( err ) );

//forma simplificada, si una funcion recive como parametro el resultado de otra funcion, no hay necesidad de espeficirla
// getHeroeByIdAsync(1)
//     .then( console.log )
//     .catch( console.warn );