import { Component, OnInit, AfterViewInit } from '@angular/core';
import { pipe, range, timer, zip, Observable } from 'rxjs';
import { retryWhen, map, mergeMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-exponential-backoff',
  template: `
  <h3>Exponential Backoff example</h3>
  <p *ngIf="successData">Api successful request has returned: {{ successData }}</p>
  <p *ngIf="errorData">Api unsuccessful request has returned: {{ errorData }}</p>
  <p *ngIf="finishedData">Api requests has been Finished: {{ finishedData }}</p>
  <p>Trying reading this article in free time: <a href="https://blog.angular-university.io/rxjs-error-handling/">RxJs Error Handling: Complete Practical Guide</a></p>
  `,
  styles: []
})
export class ExponentialBackoffComponent implements OnInit, AfterViewInit{

  public successData;
  public errorData;
  public finishedData;
  apiData$: Observable<any>
  constructor() { }

  ngOnInit() {
    this.apiData$ = ajax('/api/endpoint')
      .pipe(this.backoff(3, 250))

    this.apiData$
      .subscribe(
        n => {
          // console.log("n finished")
          this.successData = n;
          // console.log(this.successData)
        },
        err => {
          // console.log("err finished")
          this.errorData = err
          // console.log(this.errorData)
        },
        () => {
          this.finishedData = "Execution Finished"
          // console.log("finished")
        }
      )
  }

  ngAfterViewInit() {
    // ajax('/api/endpoint')
    //   .pipe(this.backoff(3, 250))
    //   .subscribe(
    //     n => {
    //       this.successData = n;
    //       console.log(this.successData)
    //     },
    //     err => {
    //       this.errorData = err
    //       console.log(this.errorData)
    //     }
    //   )
  }

  backoff(maxTries, ms) {
    return pipe(
      retryWhen(attempts => zip(range(1, maxTries), attempts)
        .pipe(
          map(([i]) => i*i),
          mergeMap(i => timer(i*ms))
        )
      )
    )
  }
}
