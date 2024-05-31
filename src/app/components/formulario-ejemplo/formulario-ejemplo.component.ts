import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-ejemplo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-ejemplo.component.html',
  styleUrl: './formulario-ejemplo.component.css'
})
export class FormularioEjemploComponent {

  form : FormGroup;

  constructor(private fg : FormBuilder) {
    this.form = this.fg.group({
      nombre : [''],
      apellido : ['']
    });
  }
  submit() {
    alert(JSON.stringify(this.form.value));
  }

  cambiarNombre() {
    this.form.get('nombre')?.setValue('Jesus');
  }

}
