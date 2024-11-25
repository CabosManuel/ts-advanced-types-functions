export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  }
}

// 0     === false
// ''    === false
// false === false

const prod1 = createProduct(1, 12, true);
console.log('🚀 ~ prod1:', prod1);

const prod2 = createProduct(1);
console.log('🚀 ~ prod2:', prod2);

const prod3 = createProduct(1, 0, false);
console.log('🚀 ~ prod3:', prod3);
