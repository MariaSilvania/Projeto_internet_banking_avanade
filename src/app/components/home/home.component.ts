import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = 'orange-bank';
  description = 'login';
  url = 'assets/images/logooficial.jpg';


  showImage: boolean = false
  showSaldo: boolean = false
  showExtrato: boolean = false
  showTranferencia: boolean = false
  showEmprestimo: boolean = false
  showPoupanca: boolean = false

  constructor() { }

  ngOnInit() {
  }

  mostrarImagens(teste) {
    this.showImage = !this.showImage;
    console.log(this.showImage)
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
