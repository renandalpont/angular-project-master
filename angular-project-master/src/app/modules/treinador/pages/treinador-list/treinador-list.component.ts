import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filter } from 'src/app/commons/models/filtro.model';
import { Pagina } from 'src/app/commons/models/page.model';
import { TreinadorSimples } from '../../models/treinador.model';
import { TreinadorService } from '../../services/treinador.service';

@Component({
  selector: 'app-treinador-list',
  templateUrl: './treinador-list.component.html',
  styleUrls: ['./treinador-list.component.scss']
})
export class TreinadorListComponent implements OnInit {

  paginaLista = {} as any//Pagina<TreinadorSimples>;
  contador = 0;
  filtroValue = "";
  filtroKey = "";
  filtroTamanhoPagina = 30;
  filtroPaginaDesejada = 0;

  constructor(private treinadorService: TreinadorService,
    private router: Router) { }

  ngOnInit(): void {
    this.resetarPagina();
  }

  listarControler(filter?: Filter) {
    this.treinadorService.listarService(filter)
      .then(result => {
        this.paginaLista = !!result ? result : {
          conteudo: [],
          paginaSelecionada: 0,
          proximaPagina: false,
          tamanhoPagina: 30
        };
        
        console.log(this.paginaLista)
        console.log(this.paginaLista.length)
        this.contador = this.paginaLista.length;
        
      })

  }

  atualizarTreinador(treinador: TreinadorSimples) {
    this.router.navigate([`treinador/${treinador.id}`])
  }

  excluirTreinador(treinador: TreinadorSimples) {
    this.treinadorService.excluirService(treinador.id)
      .then(() => {
        this.resetarPagina();
      })
  }

  resetarPagina() {
    this.paginaLista = {
      conteudo: [],
      paginaSelecionada: 0,
      proximaPagina: false,
      tamanhoPagina: 30
    } as Pagina<TreinadorSimples>;
    this.listarControler();
  }

  buscaComFiltro(avanca?: boolean) {  
    this.paginaLista = {
      conteudo: [],
      paginaSelecionada: 0,
      proximaPagina: false,
      tamanhoPagina: 30
    } as Pagina<TreinadorSimples>;

    const filtroController = {
      key: this.filtroKey,
      value: this.filtroValue,
      pageSize: this.filtroTamanhoPagina,
      wantedPage: this.filtroPaginaDesejada
    } as Filter

    this.listarControler(filtroController);
  }
}