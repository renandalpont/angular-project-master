import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LeitoCreateComponent } from './pages/leito-create/leito-create.component';
import { LeitoListComponent } from './pages/leito-list/leito-list.component';
import { LeitoAtualizarComponent } from './pages/leito-atualizar/leito-atualizar.component';


@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

const routes: Routes = [{
  path: '',
  children: [
    { path: 'leito', redirectTo:'leito/list', pathMatch: 'full'},
    { path: 'leito/create', component: LeitoCreateComponent },
    { path: 'leito/list', component: LeitoListComponent },
    { path: 'leito/:id', component: LeitoAtualizarComponent }
  ]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class LeitoRoutingModule { }