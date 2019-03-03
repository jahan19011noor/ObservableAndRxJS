import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-obs-from-counter',
  template: `
  <h3>Observables from counter</h3>
    <p>
      It's been {{ secondsCounter | async }} seconds since subscribing
    </p>
  `,
  styles: []
})
export class ObsFromCounterComponent implements OnInit {

  public secondsCounter = interval(1000);
  
  constructor() { }

  ngOnInit() {
    this.secondsCounter.subscribe(
      n => {
        // console.log(`It's been ${n} seconds since subscribing`);
      }
    )
  }

}
