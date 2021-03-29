# Curso de testing con Jest 2019

## Introducción al curso

### ¿Qué son las pruebas unitarias?

Las pruebas unitarias es ir probando una cosa por cosa y asegurarnos de que todo está funcionando correctamente.

Las pruebas unitarias comprueban lo que son **casos estándares o suposición explícita**.

Características de las prueas unitarias:

- Son automatizables -> Deben de correr sin procesos manuales.
- Tienen total cobertura -> Debemos de pasar por cada bloque que estamos escribiendo.
- Reutilizables -> Podemos usarlas para probar varias cosas sin tener que estar haciendo algo muy particular para cada una de ellas.
- Independientes -> No podemos depender de una prueba para que funcione otra.
- Rápidas de crear

Ventajas de las pruebas unitarias:

- Proporciona un trabajo ágil
- Calidad del código -> Al hacer las pruebas podrás saber qué es lo que está pasando en tu proyecto
- Detectar errores rápido -> Si ocurre un error ya sabrás en qué parte del código se encuentra y será más fácil solucionarlo
- Facilita los cambios y favorece la integración -> Es muy importante
- Proporciona información -> Podemos hacer documentación en cada prueba
- Reduce el coste $$$

¿Desventajas?

No garantiza que el código funcione en producción.

### Herramientas para pruebas en JavaScript

[Página oficial de Jest](https://jestjs.io/)

## Configuración

### ¿Qué es Jest?

Jest es una compleja herramienta para hacer pruebas unitarias en JS. Fue creado por Facebook y es open source.

Con Jest podemos tener feedback instantáneo.

Jest funciona con TypeScript.

Jest es usado por Facebook, Stotify, Twitter, Instagram, AirBNB, etc.

### Instalación y configuración

**Recuerda** instalar el preset de babel: `npm install babel-preset-es2015`

**Recuerda:** cabe destacar que Jest es una herramienta que se usa en entorno de desarrollo, por eso es necesario instalarla bajo el flag `--save-dev`

### Creando nuestra primera prueba unitaria

**Nota:** A Marzo de 2021, esto debería quedar así en el archivo package.json:

```json
{
  "name": "cursojest2019",
  "version": "1.0.0",
  "description": "Pruebas unitarias con jest",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [
    "jest",
    "pruebas",
    "unitarias"
  ],
  "author": "Miguel Angel Reyes Moreno <miguelreyesmoreno@hotmail.com>",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.13.13",
    "@babel/preset-env": "^7.13.12",
    "babel-jest": "^26.6.3",
    "babel-polyfill": "^6.26.0",
    "jest": "^26.6.3"
  },
  "dependencies": {
    "babel-preset-es2015": "^6.24.1"
  }
}
```

Creamos un archivo math.js y haremos 4 funciones, sumar, restar, multiplicar y dividir y a cada una les haremos pruebas unitarias.

Un estándar es crear una carpeta para las pruebas, se llamará `__test__`. Jest identificará esta carpeta y correrá todas las pruebas que vivan ahí.

## Matchers

### Common Matchers / Comparadores Comunes

```javascript
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

  test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user2);
  });
});
```

### Numbers

Esta parte la podemos usar para crear pruebas en las que hagamos **cálcumos matemáticos**.

```javascript
export const numbers = (a,b) => {
  return a + b;
}

import { numbers } from './../numbers.js'; //*Importante encerrarlo en llaves

describe('Comparación de números', () => {
  test('Mayor que', () => {
    expect(numbers(2,2)).toBeGreaterThan(3); //*Mayor que
  });

  test('Mayor que o igual', () => {
    expect(numbers(2,2)).toBeGreaterThanOrEqual(4); //* Mayor o igual que
  });

  test('Menor que', () => {
    expect(numbers(2,2)).toBeLessThan(5); //* Menor que
  });

  test('should ', () => {
     expect(numbers(2,2)).toBeLessThanOrEqual(5) //*Menor que o igual
  });

  test('Números flotantes (decimales)', () => {
    expect(numbers(0.2,0.2)).toBeCloseTo(0.4);
  });
});
```

Podemos ejecutar el comando con el argumento indicando el archivo específico del cual queremos que haga las pruebas, por ejemplo `npm test numbers.test.js`

### Truthness / Verdadero

Aquí haremos pruebas para tener resultados de: true, false, undefined, null.

No es recomendable hacer directamente `test()` sin `describe()` porque perderemos información y no queremos que pase esto.
Las pruebas son información de nuestro código.

```javascript
export const isNull = () => null;
export const isTrue = () => true;
export const isFalse = () => false;
export const isUndefined = () => undefined;

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
    expect(isTrue).toBeTruthy()
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
```

### Arrays

**Recuerda:** Somos humanos y es normal cometer errores. Como desarrolladores es importante NO tener prisas. Hay que leer detenidamente nuestro código y verificar que no hay errores.

```javascript
const fruits = ['banana','melón','sandía','naranja','manzana','pera'];
const colors = ['azul','verde','rojo','rosa','morado','amarillo','negro','blanco'];

export const arrayFruits = ()=> fruits;
export const arrayColors = ()=> colors;

import {arrayFruits, arrayColors} from './../arrays';

describe('Comprobaremos que existe un elemento', () => {
  test('¿Contiene una banana?', () => {
    expect(arrayFruits()).toContain('banana');
    });

    test('No contiene plátano', () => {
      expect(arrayFruits()).not.toContain('plátano');
    });

    test('Comprobar el tamaño de un array', () => {
      expect(arrayFruits()).toHaveLength(6);
    })
});

```

### Coverage

La cobertura significa que vamos a comprobar cuánto de nuestro código que tenemos en nuestro proyecto tiene pruebas.

En el archivo package.json ingresamos `"test:coverage": "jest --coverage"` y esto nos dará un reporte.

Al ejecutar este comando, Jest automáticamente creará una carpeta llamada coverage con muchos archivos que son precisamente los del reporte. Aquí podremos saber qué partes del código sí estamos usando, qué partes NO y cuánto las estamos usando.

Entramos a la carpeta de Icov-report y en el archivo index.html tendremos todos los detalles que buscamos.

### Strings

```javascript
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
```

### Monitoreo

`"test:watch": "jest --watchAll"` correrá las pruebas tan pronto guardemos el archivo.

### Setup de pruebas

Jest nos permite correr funciones antes, durante o después de nuestras pruebas.

```javascript
//* Después de cada prueba
afterEach(() => console.log('Después de cada prueba'))
afterAll(() => console.log('Después de todas las pruebas'))

//* Antes de cada prueba
beforeAll(() => console.log('Antes de todas las pruebas'))
beforeEach(() => console.log('Antes de cada prueba'))

describe('Preparar antes de ejecutar', () => {
  test('Es verdadero', () => {
    expect(true).toBeTruthy();
  });
});
```

El orden de ejecución de los console log es:

1. Antes de todas las pruebas
2. Antes de cada prueba
3. Después de cada prueba
4. Después de todas las pruebas
