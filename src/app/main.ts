import { products, addProduct } from "./product/product.service"

addProduct({
  id: "P01",
  createdAt: new Date(),
  updatedAt: new Date(),
  title: "Product 1",
  stock: 90,
  size: "S",
  category: {
    id: "C01",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Category 1"
  }
});

console.log("🚀 ~ products:", products);
