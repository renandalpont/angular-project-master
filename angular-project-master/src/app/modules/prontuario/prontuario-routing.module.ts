import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProntuarioCreateComponent } from './pages/prontuario-create/prontuario-create.component';
import { ProntuarioListComponent } from './pages/prontuario-list/prontuario-list.component';
import { ProntuarioAtualizarComponent } from './pages/prontuario-atualizar/prontuario-atualizar.component';
import { ProntuarioViewComponent } from './pages/prontuario-view/prontuario-view.component';



@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

const routes: Routes = [{
  path: '',
  children: [
    { path: 'prontuario', redirectTo:'prontuario/list', pathMatch: 'full'},
    { path: 'prontuario/create', component: ProntuarioCreateComponent },
    { path: 'prontuario/list', component: ProntuarioListComponent },
    { path: 'prontuario/:id', component: ProntuarioAtualizarComponent },
    { path: 'prontuario/visualizar/:id', component: ProntuarioViewComponent }
  ]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProntuarioRoutingModule { }