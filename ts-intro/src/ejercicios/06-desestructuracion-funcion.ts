/*
    ===== Código de TypeScript =====
*/
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Iphone 7',
    precio: 800
}

const tablet: Producto = {
    desc: 'Ipad',
    precio: 1000
}

export const calculaIVA = (productos: Producto[]): [number,number] => {
    let total = 0;
    //Desestrucutracion con metodo reduce
    // total = productos.reduce( (total, { precio }) => total + precio, total)
    //Desestrucutracion con foreach
    productos.forEach( ({ precio }) => {
       total += precio;
    })
    return [total, total * 0.15];
};

const articulos = [telefono, tablet];

const [total, iva] = calculaIVA(articulos);

// console.log(`IVA: ${iva} Precio total: ${total}`);

