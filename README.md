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
