import { Component, OnInit } from '@angular/core';
import { Cadastro } from './../cadastro.model';
import { CadastroService } from './../../api/cadastro.service';

@Component({
  selector: 'app-leitura',
  templateUrl: './leitura.page.html',
  styleUrls: ['./leitura.page.scss'],
})
export class LeituraPage implements OnInit {
  cadastrados:Cadastro[];
  displayedColumns = ['id', 'name', 'email']

  constructor(private _cadastroService : CadastroService) { }

  ngOnInit():void {
    console.log("teste")
    this._cadastroService.read();
    console.log(this._cadastroService)
  }

}
