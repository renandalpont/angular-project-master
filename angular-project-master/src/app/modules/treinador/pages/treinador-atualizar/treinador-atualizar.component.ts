import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreinadorDetalhado } from '../../models/treinador.model';
import { TreinadorService } from '../../services/treinador.service';

@Component({
  selector: 'app-treinador-atualizar',
  templateUrl: './treinador-atualizar.component.html',
  styleUrls: ['./treinador-atualizar.component.scss']
})
export class TreinadorAtualizarComponent implements OnInit {

  treinador = { } as TreinadorDetalhado;

  constructor(private activedRoute: ActivatedRoute,
    private treinadorService: TreinadorService,
    private routeNavigate: Router) { }

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.params['id'];
    this.carregaTreinador(id); 
  }

  carregaTreinador(id: number) {
    this.treinadorService.buscarUmTreinadorService(id)
    .then(result => {
      this.treinador = !!result ? result : {} as TreinadorDetalhado;
    })
    console.log(id)
  }

  salvarController() {
    this.treinadorService.atualizarService(this.treinador)  
    .then(() => {
      this.routeNavigate.navigate(['treinador/list']);
    })

  }

}