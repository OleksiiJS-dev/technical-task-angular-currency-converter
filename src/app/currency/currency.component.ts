import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const currency = document.querySelector('#currencyOne') as HTMLElement
    const value = document.querySelector('#valueOne') as HTMLElement
    const currency_one = currency.textContent
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then(res => res.json())
      .then(data => {
        let rate_two = data.rates.UAH
        value.textContent = rate_two

      })
    ///////////////////////////
    const currency1 = document.querySelector('#currencyTwo') as HTMLElement
    const value1 = document.querySelector('#valueTwo') as HTMLElement
    const currency_one1 = currency1.textContent
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one1}`)
      .then(res => res.json())
      .then(data => {
        let rate_two1 = data.rates.UAH
        value1.textContent  = rate_two1 


      })
  }

}
