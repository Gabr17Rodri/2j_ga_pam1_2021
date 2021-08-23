import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1 = null;
  num2 = null;
  resposta = '';

  constructor() {}

  somar(): void{
    let r = this.num1 + this.num2;
    this.resposta = r.toFixed(2).toString();
  }

  subtrair(): void{
    let r = this.num1 - this.num2;
    this.resposta = r.toFixed(2).toString();
  }

  multiplicar(): void{
    let r = this.num1 * this.num2;
    this.resposta = r.toFixed(2).toString();
  }

  dividir(): void{
    this.resposta = 'Não é possível dividir por zero.';

    if(this.num2 != 0){
      let r = this.num1 / this.num2;
      this.resposta = r.toFixed(2).toString();
    }
  }
}
