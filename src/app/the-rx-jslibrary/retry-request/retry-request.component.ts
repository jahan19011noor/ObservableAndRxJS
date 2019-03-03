import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { retry, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-retry-request',
  template: `
    <h3>Retry request using retry() operator</h3>
    <p>Response Data: <strong>{{ dataReceived }}</strong></p>
  `,
  styles: []
})
export class RetryRequestComponent implements OnInit {

  public apiData = ajax('/api/data').pipe(
    retry(3),
    map(res => {
      if (!res.response) {
        throw new Error("Value expected");
      }
      return res.response;
    }),
    catchError(err => of([]))
  )

  public dataReceived = "";
  public error: any;

  constructor() { }

  ngOnInit() {
    this.apiData.subscribe(
      x => { 
        this.dataReceived = 'data replaced by maping';
        console.log('data replaced by maping: ', x); 
        console.log(this.dataReceived)
      },
      err => {
        this.error = err;
        console.log('Error') 
      }
    )
  }

}
