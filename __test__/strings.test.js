describe('Comprobar cadenas de texto', () => {
  const text = 'Un bonito texto';

  test(`Debe contener una palabra del siguiente texto: "${text}"`, () => {
     expect(text).toMatch(/bonito/); //*Expresión regular
  });

  test(`No contiene una palabra del siguiente texto: "${text}"`, () => {
    expect(text).not.toMatch(/soleado/);
  });

  test(`Comprobar la longitud de este texto: "${text}"`, () => {
    expect(text).toHaveLength(15);
  });
});