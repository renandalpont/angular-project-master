import { Component, OnInit } from '@angular/core';
import { LeitoDetalhado } from '../../models/leito.model';
import { LeitoService } from '../../services/leito.service';

@Component({
  selector: 'app-leito-create',
  templateUrl: './leito-create.component.html',
  styleUrls: ['./leito-create.component.scss']
})
export class LeitoCreateComponent implements OnInit {

  leito = {} as LeitoDetalhado;
  
  constructor(private leitoService: LeitoService) { 
    
  }

  ngOnInit(): void {
    this.inicioComponente();
  }

  salvarController() {
    this.leitoService.salvarService(this.leito)
    .then(result => {
      console.log(`Leito ${result?.leitoNumero} cadastrado com sucesso.`);
      this.leito = {} as LeitoDetalhado;

    });
  }

  inicioComponente() {
    console.log("Início de componente");
  }

}
