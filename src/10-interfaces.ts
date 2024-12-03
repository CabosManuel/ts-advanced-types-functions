type Sizes = "S" | "M" | "L" | "XL";
type userId = string | number;

// Type: No se puede extender
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size: Sizes;
// }

// ** Interface: Se pueden extender **
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: "0001",
  title: "P1",
  createdAt: new Date(),
  stock: 90,
  size: "S"
});

const addProduct = (data: Product) => {
  products.push(data);
}
