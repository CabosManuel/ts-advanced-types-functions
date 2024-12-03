import { Product } from "./product.model"

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = 'fake' // Error read-only
  products.push(data);
}
