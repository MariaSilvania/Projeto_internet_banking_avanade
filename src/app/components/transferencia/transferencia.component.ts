import { Component, OnInit } from '@angular/core';
import { Ibanco } from 'src/app/models/banco';
import { BancoService } from 'src/app/services/banco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})

export class TransferenciaComponent implements OnInit {

  banco: Ibanco = {
    id: null,
    data: null,
    doc: 222222,
    historico: "DOC ELET",
    valor: null,
    tipo: "D",
  }

  constructor(
    private bancoService: BancoService,
    private router: Router
  ) { }

  id: number = 0
  saldo: number = 0
  bancos: Ibanco[] = []

  ngOnInit() {
    this.bancoService.getBancos()
      .then(dados => {
        this.bancos = dados
        for(var i = 0; i < dados.length; i++){
          this.id = dados[i].id
          if(dados[this.id].tipo === "C"){
            this.saldo = this.saldo + dados[this.id].valor
          }else{
            this.saldo = this.saldo - dados[this.id].valor
          }
        }
      })
      .catch(erro => {
        console.log(erro);
      })
  }

  salvarTransferencia(form){
    if(form.valid){
      this.bancoService.postBanco(this.banco)
        .then(dados => {
          alert(dados)
          this.router.navigate(['/home'])
        })
        .catch(err => {
          alert("Falha na transação")
        })

    }
    
  }

}

