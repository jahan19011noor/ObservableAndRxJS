import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeolocationUpdatesComponent } from './geolocation-updates/geolocation-updates.component';
import { ObservablesComponent } from './observables/observables.component';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { CreateObservableComponent } from './create-observable/create-observable.component';
import { NonMulticastingComponent } from './non-multicasting/non-multicasting.component';
import { MulticastingComponent } from './multicasting/multicasting.component';

const routes: Routes = [
  {
    path: '',
    component: ObservablesComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'geolocation', component: GeolocationUpdatesComponent },
          { path: 'simple-observable', component: SimpleObservableComponent },
          { path: 'create-observable', component: CreateObservableComponent },
          { path: 'non-multicasting', component: NonMulticastingComponent },
          { path: 'multicasting', component: MulticastingComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
