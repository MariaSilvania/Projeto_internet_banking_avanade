import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  showInvestimento: boolean = false
  showSaldo: boolean = false
  showExtrato: boolean = false
  showTranferencia: boolean = false
  showEmprestimo: boolean = false
  showPoupanca: boolean = false
  showOcultarInvestimento: boolean = false
  constructor() { }

  ngOnInit() {
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

  mostrarExtrato(extrato) {
    this.showExtrato = !this.showExtrato;
    console.log(this.showExtrato)
  }

  mostrarTransferencia(tranferencia) {
    this.showTranferencia = !this.showTranferencia;
    console.log(this.showTranferencia)
  }

  mostrarEmprestimo(emprestimo) {
    this.showEmprestimo = !this.showEmprestimo;
    console.log(this.showEmprestimo)
  }

  mostrarPoupanca(poupanca) {
    this.showPoupanca = !this.showPoupanca;
    console.log(this.showPoupanca)
  }
}
