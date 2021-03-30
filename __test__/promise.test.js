import {getDataFromApi} from './../promise';

describe('Probando promesas', () => {
  const api = 'https://rickandmortyapi.com/api/character';

  test('Realizando petición a una API', () => {
      async done => {
        const respuesta = await getDataFromApi(api);
        const array = respuesta.data.results;
        expect(array.length).toBeGreaterThan(0);
        done();
      }
    });

    test('Resuelve un ¡hola!', () => {
      return expect(Promise.resolve('¡Hola!')).resolves.toBe('¡Hola!');
    });

    test('Rechaza con un error', () => {
      return expect(Promise.reject('ERROR')).rejects.toBe('ERROR');
    });

    test('Rechaza con otro error', () => {
      return expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error');
    });
});