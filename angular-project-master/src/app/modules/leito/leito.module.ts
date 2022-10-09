import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeitoCreateComponent } from './pages/leito-create/leito-create.component';
import { GenericRouterComponent, LeitoRoutingModule } from './leito-routing.module';
import { LeitoListComponent } from './pages/leito-list/leito-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GenericRouterComponent,
    LeitoCreateComponent,
    LeitoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LeitoRoutingModule
  ]
})
export class LeitoModule { }
