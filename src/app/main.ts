import { products, addProduct } from "./product/product.service"

addProduct({
  id: "P01",
  title: "Product 1",
  createdAt: new Date(),
  stock: 90,
  size: "S",
  category: {
    id: "C01",
    name: "Category 1"
  }
});

console.log("🚀 ~ products:", products);
