import { STRING_TYPE } from '@angular/compiler';
import { convertActionBinding, convertPropertyBinding, convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
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
    this.resposta = this.num1 + this.num2;
  }

  subtrair(): void{
    this.resposta = (this.num1 - this.num2).toString();
  }
}
