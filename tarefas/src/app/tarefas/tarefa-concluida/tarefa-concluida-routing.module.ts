import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaConcluidaPage } from './tarefa-concluida.page';

const routes: Routes = [
  {
    path: '',
    component: TarefaConcluidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefaConcluidaPageRoutingModule {}
