import { Currency } from '../../currency.enum';

export interface AllRatesFilter {
  baseCurrency: Currency,
  date: Date,
}
