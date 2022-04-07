import React from 'react';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'

describe('Pruebas en <PrimeraApp />', () => {

    // test('debe de mostrar el mensaje "Hola Mundo"', () => {
    //     const saludo = 'Hola Mundo'
    //     const {getByText} = render( <PrimeraApp saludo={ saludo }/>)
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp />', () => { 

        const saludo = 'Hola Mundo'
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> )

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de mostrar el subtitulo enviado por props', () => { 
        
        const saludo = 'Hola Mundo'
        const subtitulo = 'soy un subtitulo'

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subtitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subtitulo );

    })

})