import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-create-observable',
  template: `
    <p>View console log</p>
    <p>
      <input type="text" id="name" placeholder="name"/>
    </p>
  `,
  styleUrls: ['./create-observable.component.css']
})
export class CreateObservableComponent implements OnInit {

  // This functions runs when subscribe() is called
  // -------- sequence observable createion
  sequenceSubscriber(observer) {
    observer.next(1);
    observer.next(2)
    observer.next(3)
    observer.complete();

    // unsubscribe function doesn't need to do anything in this
    // because values are delivered asynchronously
    return {unsubscribe() {}};
  }

  sequence = new Observable(this.sequenceSubscriber)
  // -------- sequence observable createion

  // -------- event observable createion

  fromEvent(target, eventName) {
    return new Observable((observer) => {
      let handler = (e) => observer.next(e);

      target.addEventListener(eventName, handler);

      return () => {
        // detach the event handler from the target
        target.removeEventListener(eventName, handler);
      }
    })
  }

  // -------- event observable createion


  constructor() { }

  ngOnInit() {
    this.sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence');}
    })

    let ESC_KEY = 27;
    let nameInput = document.getElementById('name') as HTMLInputElement;

    let subscription = this.fromEvent(nameInput, 'keydown')
                        .subscribe((e: KeyboardEvent) => {
                          if(e.keyCode === ESC_KEY) {
                            nameInput.value = '';
                          }
                        })
  }

}
