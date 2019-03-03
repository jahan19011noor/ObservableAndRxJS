import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'observables',
    loadChildren: './observables/observables.module#ObservablesModule'
  },
  {
    path: 'the-rxjs-library',
    loadChildren: './the-rx-jslibrary/the-rx-jslibrary.module#TheRxJSLibraryModule'
  },
  {
    path: 'obs-in-angular',
    loadChildren: './obs-in-angular/obs-in-angular.module#ObsInAngularModule'
  },
  {
    path: 'practical-usage',
    loadChildren: './practical-usage/practical-usage.module#PracticalUsageModule'
  },
  { path: '',   redirectTo: '/observables', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
