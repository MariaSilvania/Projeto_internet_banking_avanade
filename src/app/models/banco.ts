import { Data } from '@angular/router';

export interface Ibanco {
    id: number
    data: Data
    doc: number
    historico: string
    valor: number
    tipo: string
}

export class Banco implements Ibanco {
   constructor(
       public id: number,
       public data: Data,
       public doc: number,
       public historico: string,
       public valor: number,
       public tipo: string,
   ) { }
   
}