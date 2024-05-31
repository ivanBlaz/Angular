import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})

export class HolaMundoComponent {
    public titulo : string = "Hola Mundo";
    color : string = 'blue';
    alumnos: string[] = ['Juan', 'Pedro', 'Maria', 'Jose', 'Javier'];
    mostrarDiv : boolean = false;

    alternarDivs() {
      this.mostrarDiv = !this.mostrarDiv;
    }

    agregarAlumno(alumno : string) {
      if (alumno.length > 0) {
        this.alumnos.push(alumno);
      }
    }

}
