import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ObsInAngularRoutingModule } from './obs-in-angular-routing.module';
import { ObsInAngularComponent } from './obs-in-angular/obs-in-angular.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { RouterEventsComponent } from './router-events/router-events.component';
import { ActivatedRouteUsesObsComponent } from './activated-route-uses-obs/activated-route-uses-obs.component';
import { ReactiveFormsUsesObsComponent } from './reactive-forms-uses-obs/reactive-forms-uses-obs.component';

@NgModule({
  declarations: [ObsInAngularComponent, AsyncPipeComponent, RouterEventsComponent, ActivatedRouteUsesObsComponent, ReactiveFormsUsesObsComponent],
  imports: [
    CommonModule,
    ObsInAngularRoutingModule,
    ReactiveFormsModule
  ]
})
export class ObsInAngularModule { }
