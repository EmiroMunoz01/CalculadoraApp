import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ConcretoService } from '../concreto.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Concreto } from '../modelo/concreto.interface';

@Component({
  selector: 'app-editar-concreto',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './editar-concreto.component.html',
  styleUrl: './editar-concreto.component.css',
})
export default class EditarConcretoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private concretoService = inject(ConcretoService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  formularioEditar?: FormGroup;
  concreto!: Concreto;

  ngOnInit(): void {
    const idConcreto = this.route.snapshot.paramMap.get('idConcreto');

    if (idConcreto) {
      this.concretoService.get(parseInt(idConcreto)).subscribe((concreto) => {
        this.concreto = concreto;

        this.formularioEditar = this.fb.group({
          nombreObra: [concreto.nombreObra, [Validators.required]],
          largo: [concreto.largo, [Validators.required]],
          ancho: [concreto.ancho, [Validators.required]],
          grosor: [concreto.grosor, [Validators.required]],
          calculoConcreto: [concreto.calculoConcreto, [Validators.required]],
        });
      });
    }
  }

  // calculoConcretoo(formulario: Concreto) {
  //   formulario.calculoConcreto =
  //     formulario.ancho * formulario.grosor * formulario.largo;
  // }

  // modificarValorA(formulario : FormGroup) {

  //   this.formularioEditar!.patchValue({
  //     calculoConcreto: 2,
  //   });
  // }

  save() {
    if (this.formularioEditar?.invalid) {
      return;
    }
    const concretoForm = this.formularioEditar!.value;

    this.concretoService
      .update(this.concreto.idConcreto, concretoForm)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
