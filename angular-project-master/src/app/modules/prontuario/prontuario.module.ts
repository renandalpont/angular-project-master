import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProntuarioCreateComponent } from './pages/prontuario-create/prontuario-create.component';
import { GenericRouterComponent, ProntuarioRoutingModule } from './prontuario-routing.module';
import { ProntuarioListComponent } from './pages/prontuario-list/prontuario-list.component';
import { FormsModule } from '@angular/forms';
import { ProntuarioAtualizarComponent } from './pages/prontuario-atualizar/prontuario-atualizar.component';
import { ProntuarioViewComponent } from './pages/prontuario-view/prontuario-view.component';



@NgModule({
  declarations: [
    GenericRouterComponent,
    ProntuarioCreateComponent,
    ProntuarioListComponent,
    ProntuarioAtualizarComponent,
    ProntuarioViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProntuarioRoutingModule
  ]
})
export class ProntuarioModule { }