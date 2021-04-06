import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaEmAbertoPage } from './tarefa-em-aberto.page';

const routes: Routes = [
  {
    path: '',
    component: TarefaEmAbertoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefaEmAbertoPageRoutingModule {}
