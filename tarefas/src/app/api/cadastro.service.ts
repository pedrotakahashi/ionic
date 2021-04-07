
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  baseUrl = 'https://606df23f603ded0017504e3b.mockapi.io'

  constructor(private http: HttpClient) { }

  create(user){
    this.http.post(this.baseUrl + '/users', user).toPromise();
  }

  read(){

  }
  update(){

  }
  delete(){

  }

}
