// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

import heroes from '../data/heroes';

// const getHeroeById = ( id ) => {
//     return heroes.find( ( heroe ) => {
//         if ( heroe.id === id ){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

// const getHeroeById = ( id ) => {
//     return heroes.find(( heroe ) => heroe.id === id)
// }

const getHeroeById = ( id ) => heroes.find( (heroe) => heroe.id === id)
const getHeroeByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner)
/*
console.log(owners);
console.log( getHeroeById(1) );
console.log( getHeroeByOwner('DC'))
*/
export {
    getHeroeById,
    getHeroeByOwner
}