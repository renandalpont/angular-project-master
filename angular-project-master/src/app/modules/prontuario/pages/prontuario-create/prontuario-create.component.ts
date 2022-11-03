import { Component, OnInit } from '@angular/core';
import { ProntuarioDetalhado } from '../../models/prontuario.model';
import { ProntuarioService } from '../../services/prontuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prontuario-create',
  templateUrl: './prontuario-create.component.html',
  styleUrls: ['./prontuario-create.component.scss']
})
export class ProntuarioCreateComponent implements OnInit {

  prontuario = {} as ProntuarioDetalhado;
  
  constructor(private prontuarioService: ProntuarioService,
            private router: Router) { 
    
  }

  ngOnInit(): void {
    this.inicioComponente();
  }

  salvarController() {
    console.log(this.prontuario);
    this.prontuarioService.salvarService(this.prontuario)
    .then(result => {
      console.log(`Prontuario ${result?.nomeMedico} cadastrado com sucesso.`);
      this.prontuario = {} as ProntuarioDetalhado;
    });
    this.router.navigate([`prontuario`])
  }

  inicioComponente() {
    console.log("Início de componente");
  }

}