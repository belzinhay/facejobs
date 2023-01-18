import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  httpOptions ={
    headers: new HttpHeaders({'Content-type' : 'application/json'})
  }
  

  constructor(private http: HttpClient) {}

  readonly API = " http://localhost:3000/cadastro/";

  getLogin(){
    return this.http.get<login[]>(this.API);
  }
  getLoginUnica(id: number){
    return this.http.get(this.API + id);
  }
  postLogin(cadastro: any){
    return this.http.post(this.API, JSON.stringify(cadastro), this.httpOptions).subscribe();
  }
  deletaLogin(id: number){
    return this.http.delete(this.API + id).subscribe();
  }
  updateLogin(cadastro: login, id: any){
    return this.http.put(this.API + id, JSON.stringify(cadastro), this.httpOptions).subscribe();
  }

  //METODO DE ALTERAÇÃO DO STATUS

  editarLogin(cadastro: login){
    return this.http.put(this.API + cadastro.id + cadastro.email + cadastro.senha, JSON.stringify(cadastro)).subscribe();
  }
}
