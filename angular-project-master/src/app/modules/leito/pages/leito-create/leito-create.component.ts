import { Component, OnInit } from '@angular/core';
import { LeitoDetalhado } from '../../models/leito.model';
import { LeitoService } from '../../services/leito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leito-create',
  templateUrl: './leito-create.component.html',
  styleUrls: ['./leito-create.component.scss']
})
export class LeitoCreateComponent implements OnInit {

  leito = {} as LeitoDetalhado;
  
  constructor(private leitoService: LeitoService,
            private router: Router) { 
    
  }

  ngOnInit(): void {
    this.inicioComponente();
  }

  salvarController() {
    console.log(this.leito);
    this.leitoService.salvarService(this.leito)
    .then(result => {
      console.log(`Leito ${result?.numeroLeito} cadastrado com sucesso.`);
      this.leito = {} as LeitoDetalhado;
    });
    this.router.navigate([`leito`])
  }

  inicioComponente() {
    console.log("Início de componente");
  }

}
