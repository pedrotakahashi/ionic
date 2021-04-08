import { Cadastro } from './../cadastro/cadastro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  baseUrl = 'https://606df23f603ded0017504e3b.mockapi.io'

  constructor(private http: HttpClient) { }

  create(user){
    this.http.post(this.baseUrl + '/users', user).toPromise();
  }

  read(): Observable<Cadastro[]>{
       return this.http.get<Cadastro[]>(this.baseUrl + '/users');
   }

  update(user:Cadastro):Observable<Cadastro>{
    const url = `${this.baseUrl}/users/${user.id}`;
    return this.http.put<Cadastro>(url, user)
  }

  delete(id:number){
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.delete<Cadastro>(url);
  }
  
  
  readById(id: number): Observable<Cadastro> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.get<Cadastro>(url);
    
  
  }

}
