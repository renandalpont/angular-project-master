import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LeitoDetalhado } from '../models/leito.model';

@Injectable({
  providedIn: 'root'
})
export class LeitoService {

  constructor(private httpClient: HttpClient) { }

  salvarService(leito: LeitoDetalhado):
    Promise<LeitoDetalhado | undefined> {
    return this.httpClient
      .post<LeitoDetalhado>('http://localhost:9092/api/v1/leito/', leito)
      .toPromise();
  }
}