import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Thor','Batman','Ironman'];
  heroeBorrado: string = '';


  borrarHeroe(): void {
    // this.heroes.splice(0,1);
    // this.heroes.shift();
    this.heroeBorrado = this.heroes.pop() || '';
  }
}