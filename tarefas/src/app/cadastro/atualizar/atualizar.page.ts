import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from 'src/app/api/cadastro.service';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.page.html',
  styleUrls: ['./atualizar.page.scss'],
})
export class AtualizarPage implements OnInit {
  formulario : FormGroup;

  user: Cadastro
  constructor(
    private formBuilder: FormBuilder,
    private _cadService : CadastroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name:[null],
      email:[null]
    })

    const id =+this.route.snapshot.paramMap.get('id')
    this._cadService.readById(id).subscribe(user => {
      this.user = user;
      console.log(this.user)
    })
  }

  atualizarUsuario(){
    Object.assign(this.user, this.formulario.value);
    console.log(this.user)
    this._cadService.update(this.user).subscribe(() => {
      console.log("Agora sim")
      this.router.navigate(['/cadastrados'])
    })
  }

cancelar(){
  this.router.navigate(['/cadastrados'])
}


}
