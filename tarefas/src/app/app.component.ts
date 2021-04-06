import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Em aberto',
     url: 'tarefa/aberta', 
     icon: 'create' 
    },

    { title: 'Concluida',
    url: 'tarefa/concluida', 
    icon: 'checkbox' 
  },
    { title: 'Nova Tarefa', 
    url: 'tarefas/nova', 
    icon: 'document' 
  },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
