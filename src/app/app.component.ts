import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Currency Exchange Rates';
  tabList = [
    {
      name: 'All Currency Rates',
      route: 'all'
    },
    {
      name: 'Single Currency Rates',
      route: 'single'
    }
  ]
}
