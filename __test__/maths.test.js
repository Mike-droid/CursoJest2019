import {sumar, multiplicar, restar, dividir} from './../maths.js';

describe('Cálculos matemáticos' , ()=>{
  test('Prueba de suma', () => { //*Nombre de la prueba
    expect(sumar(1,1)).toBe(2) //* Lo que esperamos que suceda
  });

  test('Prueba de multiplicacion', () => {
    expect(multiplicar(2,2)).toBe(4)
  });

  test('Prueba de resta', () => {
    expect(restar(5,3)).toBe(2)
  });

  test('Prueba de division', () => {
    expect(dividir(8,4)).toBe(2)
  });

});