import { Component } from '@angular/core';
import { CurrencyService } from './currency.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  selectedCurrency = 'USD';
  priceInUSD = 100;
  convertedPrice = this.priceInUSD;

  constructor(private currencyService: CurrencyService) {}

  switchCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.currencyService.getExchangeRates('USD').subscribe((data: any) => {
      const rate = data.rates[currency];
      this.convertedPrice = this.priceInUSD * rate;
    });
  }
}
