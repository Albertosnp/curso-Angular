import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vejeta',
      poder: 8000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}
  //Agrega el nuevo personaje pasado al array
  agregarNuevoPersonaje(argumento: Personaje) {
    this._personajes.push(argumento);
  }
}
