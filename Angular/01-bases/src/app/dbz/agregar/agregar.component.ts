import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  //Para recibir
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //Para emitir
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) {
    
  }

  emitirNuevoPersonaje(){
    if ( this.nuevo.nombre.trim().length === 0) {return;}
    
    console.log(this.nuevo);

    //lanza el metodo que emite el nuevo personaje al componente padre
    // this.onNuevoPersonaje.emit( this.nuevo );

    //Agrega el nuevo personaje al array que hay en el servicio
    this.dbzService.agregarNuevoPersonaje(this.nuevo);

    //Se reinicializa 
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
