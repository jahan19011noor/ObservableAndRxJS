import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activated-route-uses-obs',
  template: `
    <h3>ActivatedRouter uses observables to generate url data</h3>
    <p>
      The url has changed to: {{ url }}
    </p>
  `,
  styles: []
})
export class ActivatedRouteUsesObsComponent implements OnInit {

  url: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.url
        .subscribe(url => {
          this.url = url
        })
  }

}
