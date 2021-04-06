import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefaFormularioPageRoutingModule } from './tarefa-formulario-routing.module';

import { TarefaFormularioPage } from './tarefa-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefaFormularioPageRoutingModule
  ],
  declarations: [TarefaFormularioPage]
})
export class TarefaFormularioPageModule {}
