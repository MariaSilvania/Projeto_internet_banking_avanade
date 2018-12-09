import { Component, OnInit } from '@angular/core';
import { Ibanco } from 'src/app/models/banco';
import { BancoService } from 'src/app/services/banco.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  showInvestimento: boolean = false
  showOcultarInvestimento: boolean = true
  showSaldo: boolean = false
  ocultarImgSaldo: boolean = true
  showExtrato: boolean = false
  showOcultarExtrato: boolean = true
  showTranferencia: boolean = false
  showOcultaImgTranferencia: boolean = true
  showEmprestimo: boolean = false
  showOcultarImgEmprestimo: boolean = true
  showPoupanca: boolean = false
  showOcultarImgPoupanca: boolean = true

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

  ocultarImagInvestimento(investimento) {
    this.showOcultarInvestimento = !this.showOcultarInvestimento;
    console.log(this.showOcultarInvestimento)
  }
  mostrarInvestimento(investimento) {
    this.showInvestimento = !this.showInvestimento;
    console.log(this.showInvestimento)
  }

  mostrarSaldo(saldo) {
    this.showSaldo = !this.showSaldo;
    console.log(this.showSaldo)
  }
  ocultarImgsSaldo(investimento) {
    this.ocultarImgSaldo = !this.ocultarImgSaldo;
    console.log(this.ocultarImgSaldo)
  }

  mostrarExtrato(extrato) {
    this.showExtrato = !this.showExtrato;
    console.log(this.showExtrato)
  }

  ocultarImgExtrato(extrato) {
    this.showOcultarExtrato = !this.showOcultarExtrato;
    console.log(this.showOcultarExtrato)
  }

  mostrarTransferencia(tranferencia) {
    this.showTranferencia = !this.showTranferencia;
    console.log(this.showTranferencia)
  }

  ocultaImgTransferencia(tranferencia) {
    this.showOcultaImgTranferencia = !this.showOcultaImgTranferencia;
    console.log(this.showOcultaImgTranferencia)
  }

  mostrarEmprestimo(emprestimo) {
    this.showEmprestimo = !this.showEmprestimo;
    console.log(this.showEmprestimo)
  }

  ocultarImgEmprestimo(emprestimo) {
    this.showOcultarImgEmprestimo = !this.showOcultarImgEmprestimo;
    console.log(this.showOcultarImgEmprestimo)
  }
  mostrarPoupanca(poupanca) {
    this.showPoupanca = !this.showPoupanca;
    console.log(this.showPoupanca)
  }

  ocultarImgPoupanca(poupanca) {
    this.showOcultarImgPoupanca = !this.showOcultarImgPoupanca;
    console.log(this.showOcultarImgPoupanca)
  }
  saibaMais(){
    alert("Em desenvolvimento")
  }
}
