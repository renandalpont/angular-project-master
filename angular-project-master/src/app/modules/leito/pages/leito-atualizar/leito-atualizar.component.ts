import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeitoDetalhado } from '../../models/leito.model';
import { LeitoService } from '../../services/leito.service';

@Component({
  selector: 'app-leito-atualizar',
  templateUrl: './leito-atualizar.component.html',
  styleUrls: ['./leito-atualizar.component.scss']
})
export class LeitoAtualizarComponent implements OnInit {

  leito = { } as LeitoDetalhado;

  constructor(private activedRoute: ActivatedRoute,
    private leitoService: LeitoService,
    private routeNavigate: Router) { }

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.params['id'];
    this.carregaLeito(id); 
  }

  carregaLeito(id: number) {
    this.leitoService.buscarUmLeitoService(id)
    .then(result => {
      this.leito = !!result ? result : {} as LeitoDetalhado;
    })
    console.log(id)
  }

  salvarController() {
    this.leitoService.atualizarService(this.leito)  
    .then(() => {
      this.routeNavigate.navigate(['leito/list']);
    })

  }

}
