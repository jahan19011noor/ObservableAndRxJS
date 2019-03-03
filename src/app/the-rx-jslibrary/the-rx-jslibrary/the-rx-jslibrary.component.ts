import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-rx-jslibrary',
  template: `
    <h3>The RxJS Library</h3>
    <nav>
      <a routerLink="./observable-from-promise" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">Obs from Promise</a>
      <a routerLink="./obs-from-counter">Obs from Counter</a>
      <a routerLink="./obs-from-event">Obs from Event</a>
      <a routerLink="./obs-to-create-ajax-req">Obs for ajax request</a>
      <a routerLink="./operators">Rxjs Operators</a>
      <a routerLink="./pipe-function">Pipe Function</a>
      <a routerLink="./error-handling">Error Handling</a>
      <a routerLink="./retry-request">Retry Failed Request</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class TheRxJslibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
