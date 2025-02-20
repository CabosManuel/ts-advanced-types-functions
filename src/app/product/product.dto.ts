import { Product } from "./product.model"

// Utility Type "Omit":
// Crear una interfaz que extiende Product, omitiendo atributos y
// agregando el nuevo atributo "categoryId"
export interface CreateProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string;
}

// Utility Type "Pick":
// Seleccionar atributos específicos de Produc
// type example = Pick<Product, "title" | "description" >
