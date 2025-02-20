import { faker } from "@faker-js/faker";
import { products, addProduct, updatedProduct } from "./product/product.service"

// Agregar 50 productos aleatorios
for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 0, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: faker.string.uuid(),
    image: faker.image.url({width: 500, height: 500}),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.uniqueArray(faker.commerce.productAdjective, 3)
  });
}

// Actualizar el primer producto
const product = products[0];
updatedProduct(
  product.id, {
    title: "New title",
    stock: 80,
    price: 100,
  }
);
