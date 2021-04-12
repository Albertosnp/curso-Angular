/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90, 
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }

}

const {volumen, cancion, detalles:{ autor }} = reproductor;
// const {autor} = detalles;

// console.log(volumen);
// console.log(cancion);
// console.log(autor);

const dbz: string[] = ['goku', 'vejeta', 'trunks'];
const [personaje1, , personaje3] = dbz;
console.log(personaje3);
