/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string [];
}

const pasajero1: Pasajero = {
    nombre: 'Alberto'
}

const pasajero2 : Pasajero = {
    nombre: 'Alicia',
    hijos: ['Juan', 'Kike']
}

const imprimeHijos = ({ hijos }: Pasajero) => {
    const cuantosHijos = hijos?.length || 0;
    console.log(cuantosHijos);
};

imprimeHijos(pasajero2);
imprimeHijos(pasajero1);
  