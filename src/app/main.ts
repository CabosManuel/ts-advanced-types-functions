import { faker } from "@faker-js/faker";
import { products, addProduct } from "./product/product.service"

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


console.log("🚀 ~ products:", products);
