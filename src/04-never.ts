const withoutEnd = () => {
  while(true) {
    console.log('-1 life');
  }
}

const fail = (msg: string) => {
  throw new Error(msg);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Is a string!'
  } else if (Array.isArray(input)) {
    return 'Is an Array!'
  } else {
    return fail('not match!')
  }
}

console.log('🚀 ~ example:', example( 'hello' ));
console.log('🚀 ~ example:', example( [1, 2, 3, 4] ));
// console.log('🚀 ~ example:', example( 1234 )); // Error
console.log('🚀 ~ example:', example( 'after fail!' )); // No se imprime
console.log('🚀 ~ example:', example( 'after fail!' ));
console.log('🚀 ~ example:', example( 'after fail!' ));

