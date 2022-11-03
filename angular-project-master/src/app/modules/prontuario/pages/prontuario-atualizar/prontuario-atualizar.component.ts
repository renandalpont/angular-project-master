import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProntuarioDetalhado } from '../../models/prontuario.model';
import { ProntuarioService } from '../../services/prontuario.service';

@Component({
  selector: 'app-prontuario-atualizar',
  templateUrl: './prontuario-atualizar.component.html',
  styleUrls: ['./prontuario-atualizar.component.scss']
})
export class ProntuarioAtualizarComponent implements OnInit {

  prontuario = { } as ProntuarioDetalhado;

  constructor(private activedRoute: ActivatedRoute,
    private prontuarioService: ProntuarioService,
    private routeNavigate: Router) { }

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.params['id'];
    this.carregaProntuario(id); 
  }

  carregaProntuario(id: number) {
    this.prontuarioService.buscarUmProntuarioService(id)
    .then(result => {
      this.prontuario = !!result ? result : {} as ProntuarioDetalhado;
    })
    console.log(id)
  }

  salvarController() {
    this.prontuarioService.atualizarService(this.prontuario)  
    .then(() => {
      this.routeNavigate.navigate(['prontuario/list']);
    })

  }

}
