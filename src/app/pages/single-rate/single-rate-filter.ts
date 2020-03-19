import { Currency } from '../../currency.enum';

export interface SingleRateFilter {
  selectedCurrency: Currency,
  baseCurrency: Currency,
  dateFrom: Date,
  dateTill: Date,
}
