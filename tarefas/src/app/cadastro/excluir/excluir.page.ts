import { Cadastro } from './../cadastro.model';
import { User } from './../cadastro/cadastro.page';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/api/cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.page.html',
  styleUrls: ['./excluir.page.scss'],
})


export class ExcluirPage implements OnInit {

  user:Cadastro;
 
    constructor(
    private formBuilder: FormBuilder,
    private  _cadService: CadastroService,
    private router:Router, 
    private route:ActivatedRoute
    
   ) { }

  ngOnInit():void {
    
    const id =+this.route.snapshot.paramMap.get('id')
    this._cadService.readById(id).subscribe(user => {
      this.user = user;
      console.log(this.user)
    })

    
  }

  deleteUser():void{
      this._cadService.delete(this.user.id).subscribe(user=>{
      this.user = user;
      console.log("User deletado", user)
      this.router.navigate(['/cadastrados'])
    })
  }

  cancelar(){
    this.router.navigate(['/cadastrados'])
  }

 

}

/*
  ngOnInit(): void {
  
  }

  deleteProduct():void{
    this.productService.delete(this.product.id).subscribe(()=>{
      this.productService.showMessage("Produto Excluido com sucesso!");
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

}
*/