import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ConcretoService } from '../concreto.service';

@Component({
  selector: 'app-concreto-formulario',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './concreto-formulario.component.html',
  styleUrl: './concreto-formulario.component.css',
})
export default class ConcretoFormularioComponent {
  // largoMetros: number = 0;
  // anchoMetros: number = 0;
  // grosorMetros: number = 0;
  // concretoNecesario: number = 0;

  //para hacer uso de un formulario debemos inyectarlo
  private fb = inject(FormBuilder);
  //ahora construiremos el formulario

  private concretoService = inject(ConcretoService);

  private router = inject(Router);

  form = this.fb.group({
    nombreObra: ['', [Validators.required]],
    largo: [0, [Validators.required]],
    ancho: [0, [Validators.required]],
    grosor: [0, [Validators.required]],
    calculoConcreto: [0, [Validators.required]],
  });

  create() {
    const concreto = this.form.value;

    concreto.calculoConcreto =
      concreto.ancho! * concreto.largo! * concreto.grosor!;

    this.concretoService.create(concreto).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
