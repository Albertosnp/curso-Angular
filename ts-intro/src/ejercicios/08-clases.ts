/*
    ===== Código de TypeScript =====
*/
class Persona {
    constructor(
        private nombre: string,
        private direccion: string
    ){}
}

class Heroe extends Persona{
    // private alterEgo: string;
    // private edad: number;
    // private nombreReal: string;

    constructor( 
        private alterEgo: string , 
        private edad: number, 
        private nombreReal: string,
        direccion: string
        ){
            super( nombreReal, direccion );
        }
}

const ironMan = new Heroe('Ironman', 43 , 'Tony', 'New York');

console.log(ironMan);
