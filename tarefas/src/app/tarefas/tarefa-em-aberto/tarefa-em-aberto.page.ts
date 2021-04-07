import {Storage} from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { Tarefas } from '../shared/tarefas';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tarefa-em-aberto',
  templateUrl: './tarefa-em-aberto.page.html',
  styleUrls: ['./tarefa-em-aberto.page.scss'],
})
export class TarefaEmAbertoPage implements OnInit {
  tarefas:Tarefas[] = []
  infiniteScroll: IonInfiniteScroll;

  constructor(private storage: Storage) { 
    this.ngOnInit()

    let tarefa1 = new Tarefas();
    tarefa1.title = 'Titulo da Tarefa 1';
    tarefa1.desc = "Descrição da tarefa 1  "
    
    let tarefa2 = new Tarefas();
    tarefa2.title = 'Titulo da Tarefa 2';
    tarefa2.desc = "Descrição da tarefa 2 "

    this.tarefas.push(tarefa1)
    this.tarefas.push(tarefa2)
    this.tarefas.push(tarefa1)
    this.tarefas.push(tarefa2)
    this.tarefas.push(tarefa1)
    this.tarefas.push(tarefa2)
    this.tarefas.push(tarefa1)
    this.tarefas.push(tarefa2)
    this.tarefas.push(tarefa1)
    this.tarefas.push(tarefa2)

    
    //metodo storage
         
  }


  ngOnInit() {
  }


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      let tarefa1 = new Tarefas();
      tarefa1.title = 'Titulo da Tarefa 10';
      tarefa1.desc = "Descrição da tarefa 10  "
      this.tarefas.push(tarefa1)
      this.tarefas.push(tarefa1)
      this.tarefas.push(tarefa1)
      this.tarefas.push(tarefa1)
      this.tarefas.push(tarefa1)
      this.tarefas.push(tarefa1)
      

    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
