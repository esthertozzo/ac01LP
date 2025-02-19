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

  // metodo
  celsiusParaFahrenheit(){
    this.FahrenheitValor = ((parseFloat(this.grausCelsius)*9 + 160)/5).toString();

}

  fahrenheitParaCelsius(){
    this.CelsiusValor = ((parseFloat(this.grausFahrenheit)- 32)*(5/9)).toString();

  }
}
