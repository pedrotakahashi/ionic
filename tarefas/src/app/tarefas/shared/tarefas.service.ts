import { Tarefas } from './tarefas';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  private prvtTarefas:string = 'tarefas';
  constructor(private storage:Storage) { }

  create(tarefa:Tarefas){
    this.getAll().then((tarefas: Tarefas[])=>{
      tarefas.push(tarefa)
      this.storage.set(this.prvtTarefas, tarefas);  
    })
  }
  
  update(tarefa:Tarefas, index : number){
    this.getAll().then((tarefas: Tarefas[])=>{
      
  
      tarefas[index] = tarefa;
      this.storage.set(this.prvtTarefas, tarefas);  
    })
  }

  private getAll(){
    return new Promise((resolve, reject) =>{
      let tarefas:Tarefas[];
      
      this.storage.get(this.prvtTarefas).then((tarefasDb: Tarefas[])=>{
        if(tarefasDb &&   tarefasDb.length > 0) {
          tarefas = tarefasDb;
        } else {
          tarefas = []; 
        }
        resolve(tarefas);
      });
      
      
      
    });
  }
}
