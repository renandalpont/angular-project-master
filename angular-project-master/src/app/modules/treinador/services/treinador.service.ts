import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TreinadorDetalhado } from '../models/treinador.model';

@Injectable({
  providedIn: 'root'
})
export class TreinadorService {

  constructor(private httpClient: HttpClient) { }

  salvarService(treinador: TreinadorDetalhado):
    Promise<TreinadorDetalhado | undefined> {
    console.log(treinador.nomeTreinador);
    return this.httpClient
      .post<TreinadorDetalhado>('http://localhost:8080/api/treinador/', treinador)
      .toPromise();
  }
}
