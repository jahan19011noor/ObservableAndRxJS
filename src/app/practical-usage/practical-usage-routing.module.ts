import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticalUsageComponent } from './practical-usage/practical-usage.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { ExponentialBackoffComponent } from './exponential-backoff/exponential-backoff.component';

const routes: Routes = [
  {
    path: '',
    component: PracticalUsageComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'type-ahead', component: TypeAheadComponent},
          {path: 'exponential-backoff', component: ExponentialBackoffComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticalUsageRoutingModule { }
