import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticalUsageRoutingModule } from './practical-usage-routing.module';
import { PracticalUsageComponent } from './practical-usage/practical-usage.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { ExponentialBackoffComponent } from './exponential-backoff/exponential-backoff.component';

@NgModule({
  declarations: [PracticalUsageComponent, TypeAheadComponent, ExponentialBackoffComponent],
  imports: [
    CommonModule,
    PracticalUsageRoutingModule
  ]
})
export class PracticalUsageModule { }
