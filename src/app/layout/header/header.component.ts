import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
  selector: 'app-header',
  imports: [RouterModule, FormsModule, TranslateModule, CommonModule,NgSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentCurrency = 'USD';
  currencies = ['USD', 'EUR', 'EGP'];
  exchangeRates: any = {};
  isMenuOpen = false;
  isOpen: boolean = false;
  isDropdownOpen = false;


  constructor(
    private translate: TranslateService,
    private http: HttpClient
  ) {
    const browserLang = translate.getBrowserLang();
    translate.setDefaultLang('en');
    translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');

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
    console.log('Currency switched to:', currency);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  cities = [
    { label: 'All', value: 'all' },
    { label: 'New York', value: 'new-york' },
    { label: 'Los Angeles', value: 'los-angeles' },
    { label: 'Chicago', value: 'chicago' },
    { label: 'Miami', value: 'miami' },
    { label: 'Houston', value: 'houston' },
  ];
  selectedCity = null;
}
