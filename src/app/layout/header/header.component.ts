import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentCurrency = 'USD';
  currencies = ['USD', 'EUR', 'EGP'];
  exchangeRates: any = {};
  isMenuOpen = false;


  constructor(
    private translate: TranslateService,
    private http: HttpClient
  ) {
    const browserLang = translate.getBrowserLang();
    translate.setDefaultLang('en');
    translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');

    this.loadExchangeRates();
  }

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.translate.use(lang);
  }

  switchCurrency(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const currency = selectElement.value;
    this.currentCurrency = currency;
    this.loadExchangeRates();
    console.log('Currency switched to:', currency);
  }

  loadExchangeRates() {
    this.http.get(`https://api.exchangerate-api.com/v4/latest/USD`).subscribe((res: any) => {
      this.exchangeRates = res.rates;
      console.log('Exchange rates loaded:', this.exchangeRates);
    });
  }

  convertPrice(price: number): number {
    const rate = this.exchangeRates[this.currentCurrency] || 1;
    return price * rate;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
