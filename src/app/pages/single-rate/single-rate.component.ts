import { Component, OnInit } from '@angular/core';
import { Currency } from '../../currency.enum';
import { ActivatedRoute } from '@angular/router';
import { SingleRateFilter } from './single-rate-filter';
import { ExchangeRatesService } from '../../services/exchange-rates.service';

@Component({
  selector: 'app-single-rate',
  templateUrl: './single-rate.component.html'
})
export class SingleRateComponent implements OnInit {
  filter: SingleRateFilter = {
    selectedCurrency: null,
    baseCurrency: null,
    dateFrom: null,
    dateTill: null,
  };
  currencyEnum = Currency;
  currencySelectOptions = Object.keys(Currency);
  exchangeRateList = [];
  datepickerOptions = {
    dateInputFormat: 'DD.MM.YYYY',
    containerClass: 'theme-default',
    maxDate: new Date()
  };
  baseCurrencyForReturn: Currency = null;

  constructor(
    private exchangeRatesService: ExchangeRatesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    var date = new Date();
    var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    this.filter.dateFrom = firstDayOfMonth;
    this.filter.dateTill = new Date();

    this.route.params.subscribe(params => {
      this.filter.baseCurrency = params['base'] || Currency.EUR;
      this.filter.selectedCurrency = params['selected'] || Currency.USD;
      if (params['base']) this.baseCurrencyForReturn = params['base'];
    });

    this.getExchangeRates();
  }

  getExchangeRates(): void {
    this.exchangeRatesService.getSingleExchangeRates(this.filter)
      .subscribe(result => 
        {
          this.exchangeRateList = result.rates || [];
        });
  }

}
