export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export type User = {
  username: string,
  role: ROLES;
}

const user: User = {
  username: "Cabos",
  role: ROLES.SELLER
}
