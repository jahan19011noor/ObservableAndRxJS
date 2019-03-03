import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-non-multicasting',
  template: `
    <p>
      View Console Log
    </p>
  `,
  styleUrls: ['./non-multicasting.component.css']
})
export class NonMulticastingComponent implements OnInit {

  sequenceSubscriber(observer) {
    let seq = [1,2,3]
    let timeoutId;

    // will run through an array of numbers, emitting one value
    // per second until it gets to the end of the array
    function doSequence(arr, idx) {
      timeoutId = setTimeout(() => {
        observer.next(arr[idx]);
        if(idx === arr.length - 1) {
          observer.complete();
        }
        else {
          doSequence(arr, ++idx);
        }
      }, 1000);
    }

    doSequence(seq, 0);

    // Unsubscribe should clear the timeout to stop execution
    return {unsubscribe() {
      clearTimeout(timeoutId);
    }};
  }

// Create a new Observable that will deliver the above sequence
sequence = new Observable(this.sequenceSubscriber);

  constructor() { }

  ngOnInit() {
    // Subscribe starts the clock, and will emit after 1 second
    this.sequence.subscribe({
      next(num) { console.log("non-multicasting values: "+num); },
      complete() { console.log('Finished sequence'); }
    });

    // After 1/2 second, subscribe again.
    setTimeout(() => {
      this.sequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 500);
  }

}
