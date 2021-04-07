import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tarefa/aberta',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  {
    path: 'tarefa/aberta',
    loadChildren: () => import('./tarefas/tarefa-em-aberto/tarefa-em-aberto.module').then( m => m.TarefaEmAbertoPageModule)
  },
  {
    path: 'tarefa/concluida',
    loadChildren: () => import('./tarefas/tarefa-concluida/tarefa-concluida.module').then( m => m.TarefaConcluidaPageModule)
  },
  {
    path: 'tarefas/nova',
    loadChildren: () => import('./tarefas/tarefa-formulario/tarefa-formulario.module').then( m => m.TarefaFormularioPageModule)
  },
  {
    path: 'tarefas/editar/:id',
    loadChildren: () => import('./tarefas/tarefa-formulario/tarefa-formulario.module').then( m => m.TarefaFormularioPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastrados',
    loadChildren: () => import('./cadastro/cadastrados/cadastrados.module').then( m => m.CadastradosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
