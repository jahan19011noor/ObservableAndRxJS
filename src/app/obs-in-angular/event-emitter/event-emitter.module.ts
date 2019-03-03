import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventEmitterRoutingModule } from './event-emitter-routing.module';
import { ZippyParentComponent } from './zippy-parent/zippy-parent.component';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [ZippyParentComponent, ZippyComponent],
  imports: [
    CommonModule,
    EventEmitterRoutingModule
  ]
})
export class EventEmitterModule { }
