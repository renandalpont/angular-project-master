import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinadorCreateComponent } from './pages/treinador-create/treinador-create.component';
import { GenericRouterComponent, TreinadorRoutingModule } from './treinador-routing.module';
import { TreinadorListComponent } from './pages/treinador-list/treinador-list.component';
import { FormsModule } from '@angular/forms';
import { TreinadorAtualizarComponent } from './pages/treinador-atualizar/treinador-atualizar.component';



@NgModule({
  declarations: [
    GenericRouterComponent,
    TreinadorCreateComponent,
    TreinadorListComponent,
    TreinadorAtualizarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TreinadorRoutingModule
  ]
})
export class TreinadorModule { }
