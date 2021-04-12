/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['volar','Counter','Healing'];

interface Personaje {
    nombre:  string,
    hp: number,
    habilidades: string[]
    puebloNatal?: string;
}
// class Personaje{
//     nombre:  string;
//     hp: number;
//     habilidades: string[];
//     puebloNatal?: string;

//     constructor(nombre: string, hp: number, habilidades: string[]){
//         this.nombre = nombre;
//         this.hp = hp;
//         this.habilidades = habilidades;
//     }
// }

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: habilidades
}

personaje.puebloNatal = "Madrid";

console.table( personaje );
