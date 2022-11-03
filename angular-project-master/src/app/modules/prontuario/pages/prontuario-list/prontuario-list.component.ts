import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filter } from 'src/app/commons/models/filtro.model';
import { Pagina } from 'src/app/commons/models/page.model';
import { ProntuarioSimples } from '../../models/prontuario.model';
import { ProntuarioService } from '../../services/prontuario.service';

@Component({
  selector: 'app-prontuario-list',
  templateUrl: './prontuario-list.component.html',
  styleUrls: ['./prontuario-list.component.scss']
})
export class ProntuarioListComponent implements OnInit {

  paginaLista = {} as any//Pagina<TreinadorSimples>;
  contador = 0;
  filtroValue = "";
  filtroKey = "";
  filtroTamanhoPagina = 30;
  filtroPaginaDesejada = 30;

  constructor(private prontuarioService: ProntuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.resetarPagina();
  }

  listarControler(filter?: Filter) {
    this.prontuarioService.listarService(filter)
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

  atualizarProntuario(prontuario: ProntuarioSimples) {
    this.router.navigate([`prontuario/${prontuario.id}`])
  }

  visualizarProntuario(prontuario: ProntuarioSimples) {
    this.router.navigate([`prontuario/visualizar/${prontuario.id}`])
  }
  // excluirProntuario(prontuario: ProntuarioSimples) {
  //   this.prontuarioService.excluirService(prontuario.id)
  //     .then(() => {
  //       this.resetarPagina();
  //     })
  // }

  resetarPagina() {
    this.paginaLista = {
      conteudo: [],
      paginaSelecionada: 0,
      proximaPagina: false,
      tamanhoPagina: 30
    } as Pagina<ProntuarioSimples>;
    this.listarControler();
  }

  buscaComFiltro(avanca?: boolean) {
    
    this.paginaLista = {
      conteudo: [],
      paginaSelecionada: 0,
      proximaPagina: false,
      tamanhoPagina: 30
    } as Pagina<ProntuarioSimples>;

    const filtroController = {
      key: this.filtroKey,
      value: this.filtroValue,
      pageSize: this.filtroTamanhoPagina,
      wantedPage: this.filtroPaginaDesejada
    } as Filter

    this.listarControler(filtroController);
  }
}
