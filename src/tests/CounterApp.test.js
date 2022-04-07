import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'


describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot)', () => {
        
        const value = 10;
        const wrapper = shallow( <CounterApp value={ value }/> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', () => {
        const value = 100;
        const wrapper = shallow( <CounterApp value={ value }/> );

        const textContador = wrapper.find('h2').text();
        console.log(textContador);

        expect( textContador ).toBe(value.toString());
    })

    test('debe de incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const textContador = wrapper.find('h2').text().trim();
        expect( textContador ).toBe( '1' )

    })

    test('debe de decrementar con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const textContador = wrapper.find('h2').text().trim();
        //console.log(textContador)
        expect( textContador ).toBe( '-1' )

    })

    test('debe de reiniciar el contador con el boton Reset', () => {

        const value = 10;
        const wrapper = shallow( <CounterApp value={ value }/> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const textContador = wrapper.find('h2').text().trim();
        //console.log(textContador)
        expect( textContador ).toBe( `${value}` )

    })

})