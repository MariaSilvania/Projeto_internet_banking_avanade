import { Component, OnInit } from '@angular/core';
import { Ibanco } from 'src/app/models/banco';
import { BancoService } from 'src/app/services/banco.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  id: number = 0
  saldo: number = 0
  bancos: Ibanco[] = []
  constructor(private bancoService: BancoService) { }

  ngOnInit() {
    this.bancoService.getBancos()
      .then(dados => {
        this.bancos = dados
        for(var i = 0; i < dados.length; i++){
          this.id = dados[i].id
        
        this.saldo = this.saldo + dados[this.id].valor
        
        }
      })
      .catch(erro => {
        console.log(erro);
      })
  }
}
