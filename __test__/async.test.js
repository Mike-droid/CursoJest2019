import {getDataFromApi} from './../promise';

describe('Probar Async/Await', () => {
  const api = 'https://rickandmortyapi.com/api/character/';
  //const getRick = 'https://rickandmortyapi.com/api/character/1';

  test('Realizar una petición a una API', async () => {
    //const data = await getDataFromApi(api);
    //expect(data.results).toBeGreaterThan(0);

    //const rick = await getDataFromApi(getRick);
    //expect(rick.name).toEqual('Rick Sanchez');
  });

  test('Realizando una petición a una API con un error', async() => {
    const apiError = 'http://httpstat.us/404';
    const peticion = getDataFromApi(apiError);
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
  });

  test('Resuelve un hola', async() => {
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
    await expect(Promise.reject('Error')).rejects.toBe('Error');
  });

  test('Realizando petición con error 500', async () => {
    const apiError500 = 'http://httpstat.us/500';
    try {
      await getDataFromApi(apiError500);
    } catch (error) {
      expect(error).toEqual(new Error('Request failed with status code 500'));
    }
  });
});
