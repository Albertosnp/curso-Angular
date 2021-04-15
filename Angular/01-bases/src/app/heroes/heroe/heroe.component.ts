import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
    name: string =  'IronMan';
    age: number = 40;

    get nombreCapitalizado(): string {
        return this.name.toLocaleUpperCase();
    }

    cambiarNombre(): void {
        this.name = 'America Captain';
    }
    cambiarEdad(): void {
        this.age = 29;
    }


    obtenerNombre(): string {
        return `${this.name} - ${this.age}`;
    }
}