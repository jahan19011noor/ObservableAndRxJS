import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObsInAngularComponent } from './obs-in-angular/obs-in-angular.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { RouterEventsComponent } from './router-events/router-events.component';
import { ActivatedRouteUsesObsComponent } from './activated-route-uses-obs/activated-route-uses-obs.component';
import { ReactiveFormsUsesObsComponent } from './reactive-forms-uses-obs/reactive-forms-uses-obs.component';

const routes: Routes = [
  {
    path: '',
    component: ObsInAngularComponent,
    children: [
      {
        path: '',
        children: [
          { 
            path: 'event-emitter',
            loadChildren: './event-emitter/event-emitter.module#EventEmitterModule'
          },
          { path: 'async-pipe', component: AsyncPipeComponent },
          { path: 'router-events', component: RouterEventsComponent },
          { path: 'activated-route-uses-obs', component: ActivatedRouteUsesObsComponent },
          { path: 'reactive-forms-uses-obs', component: ReactiveFormsUsesObsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObsInAngularRoutingModule { }
