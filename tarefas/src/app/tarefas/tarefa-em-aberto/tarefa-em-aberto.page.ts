import {Storage} from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { Tarefas } from '../shared/tarefas';


@Component({
  selector: 'app-tarefa-em-aberto',
  templateUrl: './tarefa-em-aberto.page.html',
  styleUrls: ['./tarefa-em-aberto.page.scss'],
})
export class TarefaEmAbertoPage implements OnInit {
  tarefas:Tarefas[] = []
  constructor(private storage: Storage) { 

    let tarefa1 = new Tarefas();
    tarefa1.title = 'Titulo da Tarefa 1';
    tarefa1.desc = "Descrição da tarefa 1  "
    
    let tarefa2 = new Tarefas();
    tarefa2.title = 'Titulo da Tarefa 2';
    tarefa2.desc = "Descrição da tarefa 2 "

    this.tarefas.push(tarefa1)
    this.tarefas.push(tarefa2)
    
    //metodo storage
 
    
    
  }

  ngOnInit() {
  }

}
