import { Component, OnInit } from '@angular/core';
import { TreinadorDetalhado } from '../../models/treinador.model';
import { TreinadorService } from '../../services/treinador.service';

@Component({
  selector: 'app-treinador-create',
  templateUrl: './treinador-create.component.html',
  styleUrls: ['./treinador-create.component.scss']
})
export class TreinadorCreateComponent implements OnInit {

  treinador = {} as TreinadorDetalhado;
  
  constructor(private treinadorService: TreinadorService) { 
    
  }

  ngOnInit(): void {
    this.inicioComponente();
  }

  salvarController() {
    this.treinadorService.salvarService(this.treinador)
    .then(result => {
      console.log(`Treinador ${result?.nomeTreinador} cadastrado com sucesso.`);
      this.treinador = {} as TreinadorDetalhado;

    });
  }

  inicioComponente() {
    console.log("Início de componente");
  }

}

