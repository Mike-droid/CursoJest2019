import { numbers } from './../numbers.js'; //*Importante encerrarlo en llaves

describe('Comparación de números', () => {
  test('Mayor que', () => {
    expect(numbers(2,2)).toBeGreaterThan(3); //*Mayor que
  });

  test('Mayor que o igual', () => {
    expect(numbers(2,2)).toBeGreaterThanOrEqual(3); //* Mayor o igual que
  });

  test('Menor que', () => {
    expect(numbers(2,2)).toBeLessThan(6); //* Menor que
  });

  test('Menor o igual que', () => {
     expect(numbers(2,2)).toBeLessThanOrEqual(6); //*Menor que o igual
  });

  test('Números flotantes (decimales)', () => {
    expect(numbers(0.2,0.2)).toBeCloseTo(0.4);
  });
});