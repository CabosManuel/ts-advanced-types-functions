import { User, ROLES } from './01-enum'

const currentUser: User = {
  username: 'Kboss',
  role: ROLES.CUSTOMER
}

export function checkAdminRole() {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log('🚀 ~ checkAdminRole:', rta);


//Función con parámetros normales
export function checkRole(role1:string, role2:string) {
  return (currentUser.role === role1 || currentUser.role === role2)
    ? true : false;
}
const rta2 = checkRole( ROLES.ADMIN, ROLES.SELLER );
console.log('🚀 ~ checkRole:', rta2);


// Función con array de parámetros
export function checkArrayRole(roles: string[]) {
  return roles.includes(currentUser.role)
    ? true : false;
}
const rta3 = checkArrayRole( [ROLES.ADMIN, ROLES.SELLER] );
console.log('🚀 ~ checkArrayRole:', rta3);


// Función con RestParameters (...roles)
export function checkRoleRestParameters(...roles: string[]) {
  return roles.includes(currentUser.role)
    ? true : false;
}
const rta4 = checkRoleRestParameters( ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER );
console.log('🚀 ~ checkRoleRestParameters:', rta3);
