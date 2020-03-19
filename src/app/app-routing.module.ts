import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRatesComponent } from './pages/all-rates/all-rates.component';
import { SingleRateComponent } from './pages/single-rate/single-rate.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/all',
    pathMatch: 'full'
  },
  {
    path: 'all',
    component: AllRatesComponent
  },
  {
    path: 'all/:base',
    component: AllRatesComponent
  },
  {
    path: 'single',
    component: SingleRateComponent
  },
  {
    path: 'single/:base/:selected',
    component: SingleRateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
