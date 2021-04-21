import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  public termino: string = "";
  public hayError: boolean = false;
  public paises: Country[] = [];

  buscar(){
    this.hayError = false;
    //Validacion del campo
    if( !this.termino.trim().length )
      return;

    console.log(this.termino);
    
    //Se hace la peticion pasando por el servicio
    this.paisService.buscarPais( this.termino )
    .subscribe( 
      (paises => this.paises = paises),
      (error => {
                this.hayError = true;
                this.paises = [];
      })
    );
  }

  constructor( private paisService: PaisService ){}
}
