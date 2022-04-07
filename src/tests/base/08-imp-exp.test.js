import { getHeroeById, getHeroeByOwner } from '../../base/08-imp-exp';
import '@testing-library/jest-dom'
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {

    test('debe de retornar un Heroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById( id );
        
        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })
    
    test('debe de retornar un Undefine si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect(heroe).toBe( undefined );
    })

    test('debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroess = getHeroeByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner)

        expect( heroess ).toEqual( heroesData );
    })

    test('debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroess = getHeroeByOwner( owner );

        expect( heroess.length ).toBe( 2 );
    })
})