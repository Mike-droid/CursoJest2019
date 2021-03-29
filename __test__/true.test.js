import {
  isNull,
  isTrue,
  isFalse,
  isUndefined
} from './../true.js';

describe('Probar resultados nulos', () => {
  test('null', () => {
    expect(isNull()).toBeNull()
  })
});

describe('Probar resultados true', () => {
  test('true', () => {
    expect(isTrue()).toBeTruthy()
  })
});

describe('Probar resultados false', () => {
  test('false', () => {
    expect(isFalse()).toBeFalsy()
  })
});

describe('Probar resultados undefined', () => {
  test('undefined', () => {
    expect(isUndefined()).toBeUndefined()
  })
});

describe('Probar resultados no verdaderos', () => {
  test('Falso o verdadero', () => {
    expect(isFalse()).not.toBeTruthy()
  })
});
