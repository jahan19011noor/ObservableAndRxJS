import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { SimpleService } from './simple.service';

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.css']
})
export class SimpleObservableComponent implements OnInit {

  next: number;
  error: number;
  complete: boolean;
  data: number;

  myObservable = of(1,2,3);

  myObserver = {
    next: x => {
      this.next = x
      console.log('Observer got a next value: ' + x)
    },
    error: err => {
      this.error = err
      console.error('Observer got an error: ' + err)
    },
    complete: () => {
      this.complete = true
      console.log('Observer got a complete notification')
    }
  }

  constructor(private service: SimpleService) { }

  ngOnInit() {
    this.myObservable.subscribe(this.myObserver)

    this.myObservable.subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );

    this.service.myObservable.subscribe(data => {
      this.data = data;
    })

    this.myObservable.subscribe(data => {
      this.data = data + 2;
    })
  }

}
