// Tipo any: Quita completamente el tipado, como regresar a JS
let anyVar: any;
anyVar = true;
anyVar = {};

let isNew: boolean = anyVar; // No da error en el IDE, pero anyVar puede no ser boolean
anyVar.doSomething(); // No da error en el IDE, pero esa función no existe

// Tipo unknown
let unknownVar: unknown;
unknownVar = true;
unknownVar = {};

// let isValid: boolean = unknownVar; // Error, no se esta seguro si la variable es boolean
if (typeof unknownVar === 'boolean') {
  let isValid: boolean = unknownVar;
}

// unknownVar.toUpperCase(); // Error, la función si existe
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

// También podemos emplear unknown en funciones si no sabemos exactamente que nos va a devolver
const parse = (str: string): unknown => {
  return JSON.parse(str);
}

