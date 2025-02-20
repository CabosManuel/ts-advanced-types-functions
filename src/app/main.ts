import { faker } from "@faker-js/faker";
import { products, addProduct } from "./product/product.service"

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.string.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 0, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    category: {
      id: faker.string.uuid(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      name: faker.commerce.department(),
    },
    image: faker.image.url({width: 500, height: 500}),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.uniqueArray(faker.commerce.productAdjective, 3)
  });
}


console.log("🚀 ~ products:", products);
