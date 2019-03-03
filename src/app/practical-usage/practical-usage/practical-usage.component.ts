import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practical-usage',
  template: `
    <h3>Practical Usage of Observables</h3>
    <nav>
      <a routerLink="./type-ahead" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">Typeahead Example</a>
      <a routerLink="./exponential-backoff">Exponential Backoff Example</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PracticalUsageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
