import { Component, OnInit } from '@angular/core';
import { Ibanco } from 'src/app/models/banco';
import { BancoService } from 'src/app/services/banco.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  showImage: boolean = false
  totalTransações: number = 0 

  cervejas: Ibanco[] = []
  constructor(private bancoService: BancoService) { }

  ngOnInit() {
    this.bancoService.getBancos()
      .then(dados => {
        this.cervejas = dados
        this.totalTransações = dados.length
      })
      .catch(erro => {
        console.log(erro);
      })

  }

  mostrarImagens(){
    this.showImage = !this.showImage
  
  }
}
