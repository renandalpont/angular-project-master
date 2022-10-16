import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { TreinadorDetalhado, TreinadorSimples } from '../models/treinador.model';
import { Pagina } from 'src/app/commons/models/page.model';
import { Filter } from 'src/app/commons/models/filtro.model';

const parametrosPadrao = {
  tamanhoPagina : 10,
  paginaDesejada: 0
}

@Injectable({
  providedIn: 'root'
})
export class TreinadorService {

  constructor(private httpClient: HttpClient) { }

  salvarService(treinador: TreinadorDetalhado):
    Promise<TreinadorDetalhado | undefined> {
    return this.httpClient
      .post<TreinadorDetalhado>('http://localhost:8080/api/treinador/', treinador)
      .toPromise();
  }

  atualizarService(treinador: TreinadorDetalhado):
    Promise<TreinadorDetalhado | undefined> {
    return this.httpClient
      .put<TreinadorDetalhado>(`http://localhost:8080/api/treinador/${treinador.idTreinador}`, treinador)
      .toPromise();
  }

  buscarUmTreinadorService(idTreinador: number):
    Promise<TreinadorDetalhado | undefined> {
    return this.httpClient
      .get<TreinadorDetalhado>(`http://localhost:8080/api/treinador/${idTreinador}`)
      .toPromise();
  }

  listarService(filter?: Filter):Promise<Pagina<TreinadorSimples> | undefined> {
      const filtroFinal = !!filter?.value ? `?${filter?.key}=${filter?.value}` : '';

      const queryParams = new HttpParams({
        fromObject: {
          tamanhoPagina : !!filter?.pageSize ? filter?.pageSize : parametrosPadrao.tamanhoPagina,
          paginaDesejada: !!filter?.wantedPage ? filter?.wantedPage : parametrosPadrao.paginaDesejada
        }
      })
      return this.httpClient
      .get<Pagina<TreinadorSimples>>
      (`http://localhost:8080/api/treinador/${filtroFinal}`,
      {params: queryParams})
      .toPromise();
  }

  excluirService(idTreinador: number | undefined):Promise<any>  {
    return this.httpClient
      .delete<any>(`http://localhost:8080/api/treinador/${idTreinador}`)
      .toPromise();
  }
}