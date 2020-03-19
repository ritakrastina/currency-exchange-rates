import { Component, OnInit } from '@angular/core';
import { Currency } from '../../currency.enum';
import { AllRatesFilter } from './all-rates-filter';
import { ActivatedRoute } from '@angular/router';
import { ExchangeRatesService } from '../../services/exchange-rates.service';

@Component({
  selector: 'app-all-rates',
  templateUrl: './all-rates.component.html'
})
export class AllRatesComponent implements OnInit {
  filter: AllRatesFilter = {
    baseCurrency: null,
    date: null,
  };
  currencyEnum = Currency;
  currencySelectOptions = Object.keys(Currency);
  exchangeRateList = [];
  datepickerOptions = {
    dateInputFormat: 'DD.MM.YYYY',
    containerClass: 'theme-default',
    maxDate: new Date()
  };

  constructor(
    private exchangeRatesService: ExchangeRatesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.filter.date = new Date();
    this.route.params.subscribe(params => {
      this.filter.baseCurrency = params['base'] || Currency.EUR;
    });
    this.getExchangeRates();
  }

  getExchangeRates(): void {
    this.exchangeRatesService.getAllExchangeRates(this.filter)
      .subscribe(result => 
        {
          this.exchangeRateList = result.rates || [];
        });
  }
}
