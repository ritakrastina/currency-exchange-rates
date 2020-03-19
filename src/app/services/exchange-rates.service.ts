import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { AllRatesFilter } from '../pages/all-rates/all-rates-filter';
import { SingleRateFilter } from '../pages/single-rate/single-rate-filter';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  private exchangeRatesApiUrl = 'https://api.exchangeratesapi.io'

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
  ) { }

  private handleError() {
    return (error: any): Observable<any> => {
      this.messagesService.addError(`Unexpected error: ${error.message}`);
      return of(error as any);
    }
  };

  getAllExchangeRates(filter: AllRatesFilter): Observable<any> {
    this.messagesService.clearErrors();

    var dateFilter = formatDate(filter.date, 'yyyy-MM-dd', 'en-US');
    var currencyFilter = `?base=${filter.baseCurrency}`;
    var requestUrl = `${this.exchangeRatesApiUrl}/${dateFilter}${currencyFilter}`;

    return this.http.get<any>(requestUrl)
      .pipe(
        catchError(this.handleError())
      )
  }

  getSingleExchangeRates(filter: SingleRateFilter): Observable<any> {
    this.messagesService.clearErrors();

    var dateFromFilter = `?start_at=${formatDate(filter.dateFrom, 'yyyy-MM-dd', 'en-US')}`;
    var dateTillFilter = `&end_at=${formatDate(filter.dateTill, 'yyyy-MM-dd', 'en-US')}`;
    var baseCurrencyFilter = `&base=${filter.baseCurrency}`;
    var selectedCurrencyFilter = `&symbols=${filter.selectedCurrency}`;
    var requestUrl = `${this.exchangeRatesApiUrl}/history${dateFromFilter}${dateTillFilter}${baseCurrencyFilter}${selectedCurrencyFilter}`;
    
    return this.http.get<any>(requestUrl)
      .pipe(
        catchError(this.handleError())
      )
  }
}
