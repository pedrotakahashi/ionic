import { CadastroService } from './../../api/cadastro.service';


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Cadastro } from './../cadastro.model';

export class User{

  nome: string;
  email: string
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  formulario : FormGroup;

  cadastro: Cadastro ={
    name: null,
    email: null
  }

  constructor(
    private formBuilder: FormBuilder,
    private _cadService : CadastroService
   ) { }

  ngOnInit() {
    //Sem form Builder
    // this.formulario =  new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });


    //com FormBuilder
    this.formulario = this.formBuilder.group({
      nome:[null],
      email:[null]
    })
      
  }

  onSubmit(): void{
   console.log(this.formulario.value);
   let user = new User();
   Object.assign(user, this.formulario.value)
   this._cadService.create(user)
  }
  
}
