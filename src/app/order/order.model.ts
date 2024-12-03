import { BaseModel } from "../base.model";
import { Product } from "./../product/product.model";
import { User } from "./../user/user.model";

interface Order extends BaseModel {
  id: string | number;
  createdAt: Date;
  products: Product[];
  user: User;
}
