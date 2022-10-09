import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TreinadorCreateComponent } from './pages/treinador-create/treinador-create.component';
import { TreinadorListComponent } from './pages/treinador-list/treinador-list.component';


@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

const routes: Routes = [{
  path: '',
  children: [
    { path: 'treinador', redirectTo:'treinador/list', pathMatch: 'full'},
    { path: 'treinador/create', component: TreinadorCreateComponent },
    { path: 'treinador/list', component: TreinadorListComponent }
  ]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TreinadorRoutingModule { }
