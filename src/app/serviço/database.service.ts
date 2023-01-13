import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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
    return this.http.get<[]>(this.API);
  }
  postLogin(cadastro: any){
    return this.http.post(this.API, JSON.stringify(cadastro), this.httpOptions).subscribe();
  }
  deletaLogin(id: number){
    return this.http.delete(this.API + id).subscribe();
  }
}
