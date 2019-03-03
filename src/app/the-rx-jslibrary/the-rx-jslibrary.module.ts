import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheRxJSLibraryRoutingModule } from './the-rx-jslibrary-routing.module';
import { TheRxJslibraryComponent } from './the-rx-jslibrary/the-rx-jslibrary.component';
import { ObservableFromPromiseComponent } from './observable-from-promise/observable-from-promise.component';
import { ObsFromCounterComponent } from './obs-from-counter/obs-from-counter.component';
import { ObsFromEventComponent } from './obs-from-event/obs-from-event.component';
import { ObsToCreateAjaxReqComponent } from './obs-to-create-ajax-req/obs-to-create-ajax-req.component';
import { OperatorsComponent } from './operators/operators.component';
import { PipeFunctionComponent } from './pipe-function/pipe-function.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { RetryRequestComponent } from './retry-request/retry-request.component';

@NgModule({
  declarations: [TheRxJslibraryComponent, ObservableFromPromiseComponent, ObsFromCounterComponent, ObsFromEventComponent, ObsToCreateAjaxReqComponent, OperatorsComponent, PipeFunctionComponent, ErrorHandlingComponent, RetryRequestComponent],
  imports: [
    CommonModule,
    TheRxJSLibraryRoutingModule
  ]
})
export class TheRxJSLibraryModule { }
