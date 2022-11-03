import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { ProntuarioDetalhado, ProntuarioSimples } from '../models/prontuario.model';
import { Pagina } from 'src/app/commons/models/page.model';
import { Filter } from 'src/app/commons/models/filtro.model';

const parametrosPadrao = {
  tamanhoPagina : 10,
  paginaDesejada: 0
}

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  constructor(private httpClient: HttpClient) { }

  salvarService(prontuario: ProntuarioDetalhado):
    Promise<ProntuarioDetalhado | undefined> {
    return this.httpClient
      .post<ProntuarioDetalhado>('http://localhost:8080/api/prontuario/', prontuario)
      .toPromise();
  }

  atualizarService(prontuario: ProntuarioDetalhado):
    Promise<ProntuarioDetalhado | undefined> {
      console.log(prontuario.id)
    return this.httpClient
      .put<ProntuarioDetalhado>(`http://localhost:8080/api/leito/${prontuario.id}`, prontuario)
      .toPromise();
  }

  buscarUmProntuarioService(id: number):
    Promise<ProntuarioDetalhado | undefined> {
    return this.httpClient
      .get<ProntuarioDetalhado>(`http://localhost:8080/api/prontuario/${id}`)
      .toPromise();
  }

  listarService(filter?: Filter):Promise<Pagina<ProntuarioSimples> | undefined> {
      const filtroFinal = !!filter?.value ? `?${filter?.key}=${filter?.value}` : '';

      const queryParams = new HttpParams({
        fromObject: {
          tamanhoPagina : !!filter?.pageSize ? filter?.pageSize : parametrosPadrao.tamanhoPagina,
          paginaDesejada: !!filter?.wantedPage ? filter?.wantedPage : parametrosPadrao.paginaDesejada
        }
      })
      return this.httpClient
      .get<Pagina<ProntuarioSimples>>
      (`http://localhost:8080/api/prontuario/${filtroFinal}`,
      {params: queryParams})
      .toPromise();
  }

  // excluirService(id: number | undefined):Promise<any>  {
  //   return this.httpClient
  //     .delete<any>(`http://localhost:8080/api/prontuario/${id}`)
  //     .toPromise();
  // }
}