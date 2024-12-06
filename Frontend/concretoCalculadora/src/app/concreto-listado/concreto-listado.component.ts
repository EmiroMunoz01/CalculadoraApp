import { Component, inject, OnInit } from '@angular/core';
import { ConcretoService } from '../concreto.service';
import { DatePipe, NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Concreto } from '../modelo/concreto.interface';

@Component({
  selector: 'app-concreto-listado',
  imports: [DatePipe, RouterModule],
  templateUrl: './concreto-listado.component.html',
})

//2 implementaremos OnInit que nos exige usar el callback onInit
export default class ConcretoListadoComponent implements OnInit {
  //1 injectamos la dependencia
  private concretoService = inject(ConcretoService);

  concreto: Concreto[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.concretoService.list().subscribe((concreto) => {
      this.concreto = concreto;
    });
  }

  eliminarConcreto(concreto: Concreto) {
    this.concretoService.delete(concreto.idConcreto).subscribe(() => {
      this.loadAll();
    });
  }
}
