import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en el archivo 02-template-string.test.js', () => {

    test('getSaludo debe de retornar hola Hector', () => {

        const nombre = 'Hector';

        const saludo = getSaludo( nombre );
        // console.log( saludo );

        expect( saludo ).toBe( 'Hola ' + nombre + '!' );
    })

    //GetSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre', () => {
        const saludo = getSaludo();
        // console.log( saludo );

        expect( saludo ).toBe( 'Hola Carlos!' );
    })

})