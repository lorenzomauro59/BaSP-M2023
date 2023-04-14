console.log('--EXERCISE 02: STRINGS');

// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula(utilizar toUpperCase).

console.log('-Exercise 2.a:');

var message = 'Hello';
message = message.toUpperCase();

console.log(message);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');

var message = 'My name is Lorenzo';
var firstFiveCharacters = message.substring(0, 5);

console.log(firstFiveCharacters);

  // Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c:');

var message = 'My name is Lorenzo';
var lastThreeCharacters = message.substring(message.length - 3);

console.log(lastThreeCharacters);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:');

var message = "mY NAME IS LORENZO";
var firstLetterMayus = message.substring(0, 1).toUpperCase();
var restLettersMinus = message.substring(1).toLowerCase();
var message2 = firstLetterMayus + restLettersMinus;

console.log(message2);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e:');

var message = 'My name is Lorenzo'
var positionFirstSpace = message.indexOf(' ');

console.log(positionFirstSpace);

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f:');

var message = "iNTERESTING bEAUTIFUL";
var positionSpace = message.indexOf(" ");
var word1 = message.substring(0, positionSpace);
var word2 = message.substring(positionSpace + 1);

var result = word1.substring(0, 1).toUpperCase() + word1.substring(1).toLowerCase() + " " + word2.substring(0, 1).toUpperCase() + word2.substring(1).toLowerCase();

console.log(result);