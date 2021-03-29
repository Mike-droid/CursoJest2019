import {arrayFruits, arrayColors} from './../arrays';

describe('Comprobaremos que existe un elemento', () => {
  test('¿Contiene una banana?', () => {
    expect(arrayFruits()).toContain('banana')
    });

    test('No contiene plátano', () => {
      expect(arrayFruits()).not.toContain('plátano')
    });

    test('Comprobar el tamaño de un array', () => {
      expect(arrayFruits()).toHaveLength(6)
    });

    test('Comprobar que existe un color', () => {
      expect(arrayColors()).toContain('azul');
    });
});
