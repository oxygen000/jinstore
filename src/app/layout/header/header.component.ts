import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    FormsModule,
    TranslateModule,
    CommonModule,
    NgSelectModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('accordionAnimation', [
      state('void', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      state('*', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('300ms ease-out'),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: '0', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  currentCurrency = 'USD';
  currencies = ['USD', 'EUR', 'EGP'];
  exchangeRates: any = {};
  isMenuOpen = false;
  isOpen: boolean = false;
  isHomeOpen = false;
  isShopOpen = false;
  isDropdownOpen = false;
  activeIndex: number | null = null;

  constructor(private translate: TranslateService, private http: HttpClient) {
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

  toggleHome() {
    this.isHomeOpen = !this.isHomeOpen;
  }

  toggleShop() {
    this.isShopOpen = !this.isShopOpen;
  }

  cities = [
    { label: 'All', value: 'all' },
    { label: 'New York', value: 'new-york' },
    { label: 'Los Angeles', value: 'los-angeles' },
    { label: 'Chicago', value: 'chicago' },
    { label: 'Miami', value: 'miami' },
    { label: 'Houston', value: 'houston' },
  ];

  selectedCity: any = this.cities[0];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCity(city: any) {
    this.selectedCity = city;
    this.isDropdownOpen = false;
  }

  getSelectedLabel() {
    return this.selectedCity?.label || 'Select';
  }

  homeMenu = [
    {
      label: 'All Categories',
      link: '/categories',
      icon: '/icon/all.svg',
      alt: 'all',
      hasArrow: true,
    },
    {
      label: 'Fruits & Vegetables',
      link: '/fruits-vegetables',
      icon: '/icon/apple.svg',
      alt: 'apple',
      hasArrow: true,
    },
    {
      label: 'Meats & Seafood',
      link: '/meats-seafood',
      icon: '/icon/meat.svg',
      alt: 'meat',
      hasArrow: true,
    },
    {
      label: 'Breakfast & Dairy',
      link: '/breakfast-dairy',
      icon: '/icon/egg.svg',
      alt: 'egg',
      hasArrow: true,
    },
    {
      label: 'Breads & Bakery',
      link: '/breads-bakery',
      icon: '/icon/toast.svg',
      alt: 'toast',
      hasArrow: true,
    },
    {
      label: 'Beverages',
      link: '/beverages',
      icon: '/icon/cup.svg',
      alt: 'cup',
      hasArrow: true,
    },
    {
      label: 'Frozen Foods',
      link: '/frozen-foods',
      icon: '/icon/snowflake.svg',
      alt: 'snowflake',
      hasArrow: false,
    },
    {
      label: 'Biscuits & Snacks',
      link: '/biscuits-snacks',
      icon: '/icon/bar.svg',
      alt: 'bar',
      hasArrow: false,
    },
    {
      label: 'Grocery & Staples',
      link: '/grocery-staples',
      icon: '/icon/wheat.svg',
      alt: 'wheat',
      hasArrow: false,
    },
    {
      label: 'Household Needs',
      link: '/household-needs',
      icon: '/icon/scoop.svg',
      alt: 'scoop',
      hasArrow: false,
    },
    {
      label: 'Healthcare',
      link: '/healthcare',
      icon: '/icon/toiletpaper.svg',
      alt: 'toilet paper',
      hasArrow: false,
    },
    {
      label: 'Baby & Pregnancy',
      link: '/baby-pregnancy',
      icon: '/icon/baby.svg',
      alt: 'baby',
      hasArrow: false,
    },
  ];

  shopMenu = [
    {
      label: 'All Categories',
      link: '/categories',
      icon: '/icon/all.svg',
      alt: 'all',
      hasArrow: true,
    },
  ];

  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
