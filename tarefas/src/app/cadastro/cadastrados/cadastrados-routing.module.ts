import { ExcluirPage } from './../excluir/excluir.page';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastradosPage } from './cadastrados.page';
import { AtualizarPage } from '../atualizar/atualizar.page';

const routes: Routes = [
  {
    path: '',
    component: CadastradosPage
  },
  {
    path: 'excluir/:id',
    component:ExcluirPage
  },
  {
    path: 'atualizar/:id',
    component:AtualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastradosPageRoutingModule {}
