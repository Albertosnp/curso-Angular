/*
    ===== Código de TypeScript =====
*/
const queTipoSoy = <T>(argumento: T) => {
    return argumento;
};

let soyString = queTipoSoy('Hola mundo');
let soyNumber = queTipoSoy(50);
let soyArreglo = queTipoSoy( [1,2,3,4] );

let soyExplicito = queTipoSoy<number>( 100 );