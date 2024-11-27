// Kboss => [K, b, o, s, s] input: string => output: string[]
// [K, b, o, s, s] => Kboss input: string[] => output: string

function parseString(input: string): string[];
function parseString(input: string): string[];
function parseString(input: string[]): string;
function parseString(input: number): boolean;
function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

const array = parseString('Kboss');
console.log('🚀 ~ array:', array);

array.reverse();
// Ya no es necesario validar el tipado
// if (Array.isArray(array)) {
//   array.reverse();
// }
console.log('🚀 ~ array.reverse():', array);

const str = parseString(array);
console.log('🚀 ~ str:', str);

str.toLowerCase(); // Error
// Ya no es necesario validar el tipado
// if (typeof str === 'string') {
//   str.toLowerCase();
// }
console.log('🚀 ~ str.toLowerCase():', str.toLowerCase());

const bool = parseString(str.length);
console.log('🚀 ~ bool:', bool);
