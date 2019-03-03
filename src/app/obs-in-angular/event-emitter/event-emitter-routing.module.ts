import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZippyParentComponent } from './zippy-parent/zippy-parent.component';

const routes: Routes = [
  {
    path: '',
    component: ZippyParentComponent,
    children: [
      {
        path: '',
        children: [
          
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventEmitterRoutingModule { }
