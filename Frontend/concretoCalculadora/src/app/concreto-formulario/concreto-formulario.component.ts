import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ConcretoService } from '../concreto.service';
import { Concreto } from '../modelo/concreto.interface';

@Component({
  selector: 'app-concreto-formulario',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './concreto-formulario.component.html',
  styleUrl: './concreto-formulario.component.css',
})
export default class ConcretoFormularioComponent implements OnInit {
  // largoMetros: number = 0;
  // anchoMetros: number = 0;
  // grosorMetros: number = 0;
  //concretoNecesario: number = 0;

  //para hacer uso de un formulario debemos inyectarlo
  private fb = inject(FormBuilder);
  //ahora construiremos el formulario
  private concretoService = inject(ConcretoService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  form?: FormGroup;
  concreto?: Concreto;

  ngOnInit(): void {
    const idConcreto = this.route.snapshot.paramMap.get('idConcreto');

    if (idConcreto) {
      this.concretoService.get(parseInt(idConcreto)).subscribe((concreto) => {
        this.concreto = concreto;
        this.form = this.fb.group({
          nombreObra: [concreto.nombreObra, [Validators.required]],
          largo: [concreto.largo, [Validators.required]],
          ancho: [concreto.ancho, [Validators.required]],
          grosor: [concreto.grosor, [Validators.required]],
          calculoConcreto: [concreto.calculoConcreto, [Validators.required]],
        });
      });
    } else {
      this.form = this.fb.group({
        nombreObra: ['', [Validators.required]],
        largo: [0, [Validators.required]],
        ancho: [0, [Validators.required]],
        grosor: [0, [Validators.required]],
        calculoConcreto: [0, [Validators.required]],
      });
    }
  }

  calculoConcretoo(formulario: Concreto) {
    formulario.calculoConcreto =
      formulario.ancho * formulario.grosor * formulario.largo;
  }

  save() {
    if (this.form?.invalid) {
      return;
    }

    const concretoForm = this.form!.value;

    if (this.concreto) {
      this.calculoConcretoo(concretoForm);

      this.concretoService
        .update(this.concreto.idConcreto, concretoForm)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    } else {
      this.calculoConcretoo(concretoForm);

      this.concretoService.create(concretoForm).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
