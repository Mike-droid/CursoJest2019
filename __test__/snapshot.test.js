import {getCharacter} from './../snapshot';
import rick from './../rick.json';

describe('Es hora de las instantaneas', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  //*Se crearán datos aletorios que no van a coincidir con el snapshot
  test('Siempre fallará la instantanea', () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20)
    }
    expect(user).toMatchSnapshot();
  });

  test('Tenemos una excepción dentro del código', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Miguel Reyes"
    }
    expect(user).toMatchSnapshot({
      id: expect.any(Number) //*ID tendrá cualquier valor numérico
    });
  });
});