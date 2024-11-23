// Array normal: No importa la posición del tipado
const prices: (number | string)[] = [1, 2, 3, 4, 'as'];

// Tupla: Si importa el orden, posición del tipado y la cantidad
let userData: [string, number, boolean];
userData = ['kboss', 1, true];

// Todas las siguientes formas dan error:
// userData = ['kboss', 1, true, 'string', 'string'];
// userData = ['string'];
// userData = ['string', 1];
// userData = ['string', 1, false];
// userData = [false, 'string', 1];

// Destructuring
const [username, age] = userData;
console.log('🚀 ~ username:', username);
console.log('🚀 ~ age:', age);
