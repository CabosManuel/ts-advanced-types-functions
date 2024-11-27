// Kboss => [K, b, o, s, s] input: string => output: string[]
// [K, b, o, s, s] => Kboss input: string[] => output: string

export function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const array = parseString('Kboss');
console.log('🚀 ~ array:', array);

// array.reverse(); // Error
if (Array.isArray(array)) {
  array.reverse();
  console.log('🚀 ~ array.reverse():', array);
}

const str = parseString(array);
console.log('🚀 ~ str:', str);

// str.toLowerCase(); // Error
if (typeof str === 'string') {
  str.toLowerCase();
  console.log('🚀 ~ str.toLowerCase():', str.toLowerCase());
}
