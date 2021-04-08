import { Router } from '@angular/router';
import { Cadastro } from './../cadastro.model';
import { CadastroService } from './../../api/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrados',
  templateUrl: './cadastrados.page.html',
  styleUrls: ['./cadastrados.page.scss'],
})
export class CadastradosPage implements OnInit {

  cadastros:Cadastro [];
  displayedColumns = ['name', 'email'];

  constructor(
    private _cadastroService : CadastroService,
    private routerLink : Router
    ) { }

  ngOnInit(): void {
    this._cadastroService.read().subscribe(cadastros =>{
      this.cadastros = cadastros
      console.log(this.cadastros)
    })
    
  }

  excluir(id:number){
    this.routerLink.navigate([`/cadastrados/excluir/${id}`])
  }

  editar(id:number){
    this.routerLink.navigate([`/cadastrados/atualizar/${id}`])
  }

}
