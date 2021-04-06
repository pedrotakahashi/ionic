import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefaConcluidaPageRoutingModule } from './tarefa-concluida-routing.module';

import { TarefaConcluidaPage } from './tarefa-concluida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefaConcluidaPageRoutingModule
  ],
  declarations: [TarefaConcluidaPage]
})
export class TarefaConcluidaPageModule {}
