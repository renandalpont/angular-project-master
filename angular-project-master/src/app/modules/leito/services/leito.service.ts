import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { LeitoDetalhado, LeitoSimples } from '../models/leito.model';
import { Pagina } from 'src/app/commons/models/page.model';
import { Filter } from 'src/app/commons/models/filtro.model';

const parametrosPadrao = {
  tamanhoPagina : 10,
  paginaDesejada: 0
}

@Injectable({
  providedIn: 'root'
})
export class LeitoService {

  constructor(private httpClient: HttpClient) { }

  salvarService(leito: LeitoDetalhado):
    Promise<LeitoDetalhado | undefined> {
    return this.httpClient
      .post<LeitoDetalhado>('http://localhost:8080/api/leito/', leito)
      .toPromise();
  }

  atualizarService(leito: LeitoDetalhado):
    Promise<LeitoDetalhado | undefined> {
      console.log(leito.id)
    return this.httpClient
      .put<LeitoDetalhado>(`http://localhost:8080/api/leito/${leito.id}`, leito)
      .toPromise();
  }

  buscarUmLeitoService(id: number):
    Promise<LeitoDetalhado | undefined> {
    return this.httpClient
      .get<LeitoDetalhado>(`http://localhost:8080/api/leito/${id}`)
      .toPromise();
  }

  listarService(filter?: Filter):Promise<Pagina<LeitoSimples> | undefined> {
      const filtroFinal = !!filter?.value ? `?${filter?.key}=${filter?.value}` : '';

      const queryParams = new HttpParams({
        fromObject: {
          tamanhoPagina : !!filter?.pageSize ? filter?.pageSize : parametrosPadrao.tamanhoPagina,
          paginaDesejada: !!filter?.wantedPage ? filter?.wantedPage : parametrosPadrao.paginaDesejada
        }
      })
      return this.httpClient
      .get<Pagina<LeitoSimples>>
      (`http://localhost:8080/api/leito/${filtroFinal}`,
      {params: queryParams})
      .toPromise();
  }

  excluirService(idLeito: number | undefined):Promise<any>  {
    return this.httpClient
      .delete<any>(`http://localhost:8080/api/leito/${idLeito}`)
      .toPromise();
  }
}