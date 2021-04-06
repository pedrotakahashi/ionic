import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefaEmAbertoPageRoutingModule } from './tarefa-em-aberto-routing.module';

import { TarefaEmAbertoPage } from './tarefa-em-aberto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefaEmAbertoPageRoutingModule
  ],
  declarations: [TarefaEmAbertoPage]
})
export class TarefaEmAbertoPageModule {}
