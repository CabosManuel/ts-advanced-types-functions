import { Product } from "./product.model"
import { CreateProductDto } from "./product.dto"
import { faker } from "@faker-js/faker/.";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }
  }

  products.push(newProduct);
  return newProduct;
}

export const getProduct = (id: string) => {
}

export const updatedProduct = (id: string, changes: Product) => {

}

export const deleteProduct = (id: string) => {
}
