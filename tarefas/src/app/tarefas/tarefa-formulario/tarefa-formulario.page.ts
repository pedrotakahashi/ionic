import { Storage } from '@ionic/storage-angular';
import { TarefasService } from './../shared/tarefas.service';
import { Component, OnInit } from '@angular/core';
import { Tarefas } from '../shared/tarefas';

@Component({
  selector: 'app-tarefa-formulario',
  templateUrl: './tarefa-formulario.page.html',
  styleUrls: ['./tarefa-formulario.page.scss'],
})
export class TarefaFormularioPage implements OnInit {
  tarefa:Tarefas;

  constructor(private  tarefasService : TarefasService, private storage: Storage) { }
    title : string;
    desc: string;

  ngOnInit() {
    this.tarefa  = new Tarefas();
  }

  onSubmit():void{
    if(this.tarefa) {
      this.tarefasService.create(this.tarefa)
    }
    console.log("salvou")
    console.log(this.title)
    console.log(this.desc)
  }

  getForm(){
    console.log("tes")
  }

  setTitle(item){
    this.title = item;
  }

  setDesc(item){
    this.desc = item;
  }
}
