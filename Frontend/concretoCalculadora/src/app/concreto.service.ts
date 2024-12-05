import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Concreto } from './modelo/concreto.interface';

@Injectable({
  providedIn: 'root',
})
export class ConcretoService {
  //1 necesito inyectar un cliente http para trabajar

  private http = inject(HttpClient);

  list() {
    return this.http.get<Concreto[]>(
      'http://localhost:8080/api-concreto/concreto'
    );
  }

  get(id: number) {
    return this.http.get<Concreto>(
      `http://localhost:8080/api-concreto/concreto/${id}`
    );
  }

  create(concreto: any) {
    return this.http.post<Concreto>(
      'http://localhost:8080/api-concreto/concreto',
      concreto
    );
  }

  update(id: number, concreto: any) {
    return this.http.put<Concreto>(
      `http://localhost:8080/api-concreto/concreto/${id}`,
      concreto
    );
  }

  delete(id: number, concreto: any) {
    return this.http.delete<void>(
      `http://localhost:8080/api-concreto/concreto/${id}`,
      concreto
    );
  }
}
