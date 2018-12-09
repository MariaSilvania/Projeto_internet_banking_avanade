import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ibanco } from '../models/banco';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  url: string = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }
  getBancos(){
    return this.http.get<Ibanco[]>(this.url + 'extratos').toPromise()
  }
  //pega uma cerveja usando o id como parametro
  getBanco(id: number){
    return this.http.get<Ibanco>(this.url + `extrato/${id}`).toPromise()
  }
  // //cadatra uma nova cerveja
  // postCerveja(cerveja: Ibanco){
  //   return this.http.post(this.url + "extrato", cerveja).toPromise()
  // }
  // //edita uma cerveja
  // putCerveja(cerveja: Ibanco){
  //   return this.http.put(this.url + `extrato/${cerveja.id}`, cerveja).toPromise()
  // }
  // //deleta uma cerveja
  // deleteCerveja(id: number){
  //   return this.http.delete(this.url + `extrato/${id}`).toPromise()
  // }
}
