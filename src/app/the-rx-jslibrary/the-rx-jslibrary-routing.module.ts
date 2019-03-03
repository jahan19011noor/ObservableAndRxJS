import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheRxJslibraryComponent } from './the-rx-jslibrary/the-rx-jslibrary.component';
import { ObservableFromPromiseComponent } from './observable-from-promise/observable-from-promise.component';
import { ObsFromCounterComponent } from './obs-from-counter/obs-from-counter.component';
import { ObsFromEventComponent } from './obs-from-event/obs-from-event.component';
import { ObsToCreateAjaxReqComponent } from './obs-to-create-ajax-req/obs-to-create-ajax-req.component';
import { OperatorsComponent } from './operators/operators.component';
import { PipeFunctionComponent } from './pipe-function/pipe-function.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { RetryRequestComponent } from './retry-request/retry-request.component';

const routes: Routes = [
  {
    path: '',
    component: TheRxJslibraryComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'observable-from-promise', component: ObservableFromPromiseComponent },
          { path: 'obs-from-counter', component: ObsFromCounterComponent },
          { path: 'obs-from-event', component: ObsFromEventComponent },
          { path: 'obs-to-create-ajax-req', component: ObsToCreateAjaxReqComponent },
          { path: 'operators', component: OperatorsComponent },
          { path: 'pipe-function', component: PipeFunctionComponent },
          { path: 'error-handling', component: ErrorHandlingComponent },
          { path: 'retry-request', component: RetryRequestComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheRxJSLibraryRoutingModule { }
