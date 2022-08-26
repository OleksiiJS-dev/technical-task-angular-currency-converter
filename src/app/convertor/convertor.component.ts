import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let currencyEl_one: any = document.getElementById('currency-one') as HTMLSelectElement
    let amountEl_one: any = document.getElementById('amount-one') as HTMLInputElement
    let currencyEl_two: any = document.getElementById('currency-two') as HTMLSelectElement
    let amountEl_two: any = document.getElementById('amount-two') as HTMLInputElement

    function calculate() {
      let currency_one = currencyEl_one.value
      let currency_two = currencyEl_two.value;
      fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
          let rate_two = data.rates[currency_two]
          amountEl_one.addEventListener('input', function (e: any) {
            const value = parseInt(e.target.value);
            if (Number.isFinite(value)) {
              amountEl_two.value = (amountEl_one.value * rate_two).toFixed(2)
            } else {
              amountEl_two.value = '';
            }
          })
          amountEl_two.addEventListener('input', function (e: any) {
            const value = parseInt(e.target.value);
            if (Number.isFinite(value)) {
              amountEl_one.value = (amountEl_two.value / rate_two).toFixed(2);
            } else {
              amountEl_one.value = '';
            }

          })
          currencyEl_one.addEventListener('change', (event: any) => {
            const valueNew = event.target.value
            fetch(`https://api.exchangerate-api.com/v4/latest/${valueNew}`)
              .then(res => res.json())
              .then(data => {
                let currency_one = currencyEl_one.value;
                let currency_two = currencyEl_two.value;

                let rate_two = data.rates[currency_two]
                if (Number.isFinite(rate_two)) {

                  amountEl_one.value = (amountEl_two.value / rate_two).toFixed(2);

                } else {
                  /////
                  amountEl_one.value = ''
                }
              })
          })
          currencyEl_two.addEventListener('change', (event: any) => {
            const valueNew = event.target.value
            fetch(`https://api.exchangerate-api.com/v4/latest/${valueNew}`)
              .then(res => res.json())
              .then(data => {
                let currency_one = currencyEl_one.value;
                let currency_two = currencyEl_two.value;

                let rate_two = data.rates[currency_one]
                if (Number.isFinite(rate_two)) {
                  amountEl_two.value = (amountEl_one.value / rate_two).toFixed(2);
                } else {
                  amountEl_two.value = ''
                }
              })
          })
        })
    }


    // Event listeners
    currencyEl_one.addEventListener('change', calculate);
    amountEl_one.addEventListener('input', calculate);
    currencyEl_two.addEventListener('change', calculate);
    amountEl_two.addEventListener('input', calculate);
    


  }

}
