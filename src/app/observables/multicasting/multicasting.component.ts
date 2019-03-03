import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MulticastingService } from './multicasting.service';

@Component({
  selector: 'app-multicasting',
  template: `
    <p>
      View Console Log
    </p>
  `,
  styleUrls: ['./multicasting.component.css']
})
export class MulticastingComponent implements OnInit {

  // Create a new Observable that will deliver the above sequence

  constructor(private multicastingService: MulticastingService) { }

  ngOnInit() {
    // Subscribe starts the clock, and begins to emit after 1 second
    this.multicastingService.multicastSequence.subscribe({
      next(num) { console.log('1st subscribe: ' + num); },
      complete() { console.log('1st sequence finished.'); }
    });

    // After 1 1/2 seconds, subscribe again (should "miss" the first value).
    setTimeout(() => {
      this.multicastingService.multicastSequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 1500);
  }
}
