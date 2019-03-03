import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { GeolocationUpdatesComponent } from './geolocation-updates/geolocation-updates.component';
import { ObservablesComponent } from './observables/observables.component';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { CreateObservableComponent } from './create-observable/create-observable.component';
import { NonMulticastingComponent } from './non-multicasting/non-multicasting.component';
import { MulticastingComponent } from './multicasting/multicasting.component';

@NgModule({
  declarations: [GeolocationUpdatesComponent, ObservablesComponent, SimpleObservableComponent, CreateObservableComponent, NonMulticastingComponent, MulticastingComponent],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
