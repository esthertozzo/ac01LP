import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  //atributos
  grausCelsius = "";
  grausFahrenheit = "";
  FahrenheitValor = "";
  CelsiusValor = "";
  lado1 = "";
  lado2 = "";
  lado3 = "";
  triangulo = "";
  nota1 = "";
  nota2 = "";
  nota3 = "";
  nota4 = "";
  valorMedia = "";
  definicaoMedia = "";


  // ex 1
  // metodo
  celsiusParaFahrenheit(){
    this.FahrenheitValor = ((parseFloat(this.grausCelsius)*9 + 160)/5).toString();

}

  fahrenheitParaCelsius(){
    this.CelsiusValor = ((parseFloat(this.grausFahrenheit)- 32)*(5/9)).toString();

  }

   // ex 2
   verificarTriangulo(){
    if(this.lado1 < this.lado2 + this.lado3 && this.lado2 < this.lado1 + this.lado3 && this.lado3 < this.lado1 + this.lado2){
      if(this.lado1==this.lado2 && this.lado2==this.lado3 && this.lado1==this.lado3){
        this.triangulo = ("É um tringulo equilátero");
      }
      else if(this.lado1!=this.lado2 && this.lado2!=this.lado3 && this.lado1!=this.lado3){
        this.triangulo = ("É um triângulo escaleno");
      }else{
        this.triangulo = ("É um triângulo isosceles");
      }
    }else{
      this.triangulo = ("Os lados informados não formam um triângulo!");
  }
  }

  // ex 3
  media(){
    this.valorMedia = (((parseFloat(this.nota1)) + (parseFloat(this.nota2)) + (parseFloat(this.nota3)) + (parseFloat(this.nota4)))/ 4).toString();

    if(Number(this.valorMedia) < 3){
      this.definicaoMedia = (`Sua média é ${this.valorMedia}! Você está retido.`);
    }
    else if(Number(this.valorMedia) >= 3 && Number(this.valorMedia) <=5.9 ){
       this.definicaoMedia = (`Sua média é ${this.valorMedia}! Você está de recuperação :(`);
    }
    else{
      this.definicaoMedia = (`Sua média é ${this.valorMedia}! Você está de aprovado, parabéns (:`);
    }

  }


}
