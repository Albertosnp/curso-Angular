import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {

   nuevo: Personaje = {
      nombre: 'Alberto',
      poder: 10000
   } 
   
  constructor( private dbzService: DbzService){}
}
