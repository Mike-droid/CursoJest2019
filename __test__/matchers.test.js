describe('Comparadores comunes', () => {
  const user = {
    name: "Miguel",
    lastName: "Reyes"
  }

  const user2 = {
    name: "Miguel",
    lastName: "Reyes"
  }

  test('igualdad de elementos', () => {
    expect(user).toEqual(user2)
  });

  /*test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user2);
  });*/
});
