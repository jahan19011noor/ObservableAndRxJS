import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MulticastingService {

  constructor() { }

  multicastSequence = new Observable(this.multicastSequenceSubscriber());

  multicastSequenceSubscriber() {
    let seq = [1,2,3]

    // Keep track of each observer (one for every active subscription)
    let observers = []

    // Still a singel timeoutId because there will only ever be one
    // set of values being generated, multicasted to each subscriber
    let timeoutId;

    // Return the subscriber function (runs when subscribe())
    // function is invoked)
    return (observer) => {
      observers.push(observer);

      // When this is the first subscription, start the sequence
      if(observers.length === 1) {
        timeoutId = this.doSequence({
          next(val) {
            // Iterate through observers and notify all subscriptions
            observers.forEach(obs => obs.next(val));
          },
          complete() {
            // Notify all complete callbacks
            observers.slice(0).forEach(obs => obs.complete());
          }
        }, seq, 0);
      }

      return {
        unsubscribe() {
          // Remove from the observers array so it's no longer notified
          observers.splice(observers.indexOf(observer), 1);
          // If there's no more listeners, do cleanup
          if (observers.length === 0) {
            clearTimeout(timeoutId);
          }
        }
      };
    }
  }

  doSequence(observer, arr, idx) {
    return setTimeout(() => {
      observer.next(arr[idx]);
      if (idx === arr.length - 1) {
        observer.complete();
      } else {
        this.doSequence(observer, arr, ++idx);
      }
    }, 1000);
  }
}
