import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filter } from 'src/app/commons/models/filtro.model';
import { Pagina } from 'src/app/commons/models/page.model';
import { LeitoSimples } from '../../models/leito.model';
import { LeitoService } from '../../services/leito.service';

@Component({
  selector: 'app-leito-list',
  templateUrl: './leito-list.component.html',
  styleUrls: ['./leito-list.component.scss']
})
export class LeitoListComponent implements OnInit {

  paginaLista = {} as any//Pagina<TreinadorSimples>;
  contador = 0;
  filtroValue = "";
  filtroKey = "";
  filtroTamanhoPagina = 30;
  filtroPaginaDesejada = 30;

  constructor(private leitoService: LeitoService,
    private router: Router) { }

  ngOnInit(): void {
    this.resetarPagina();
  }

  listarControler(filter?: Filter) {
    this.leitoService.listarService(filter)
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

  atualizarLeito(leito: LeitoSimples) {
    this.router.navigate([`leito/${leito.id}`])
  }

  excluirLeito(leito: LeitoSimples) {
    this.leitoService.excluirService(leito.id)
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
    } as Pagina<LeitoSimples>;
    this.listarControler();
  }

  buscaComFiltro(avanca?: boolean) {
    
    this.paginaLista = {
      conteudo: [],
      paginaSelecionada: 0,
      proximaPagina: false,
      tamanhoPagina: 30
    } as Pagina<LeitoSimples>;

    const filtroController = {
      key: this.filtroKey,
      value: this.filtroValue,
      pageSize: this.filtroTamanhoPagina,
      wantedPage: this.filtroPaginaDesejada
    } as Filter

    this.listarControler(filtroController);
  }
}
