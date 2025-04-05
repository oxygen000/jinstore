import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getExchangeRates(baseCurrency: string) {
    return this.http.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
  }
}
