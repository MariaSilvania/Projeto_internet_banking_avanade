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
}
