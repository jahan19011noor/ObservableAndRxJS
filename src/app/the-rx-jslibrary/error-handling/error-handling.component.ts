import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';

@Component({
  selector: 'app-error-handling',
  template: `
    <h3>Error Handling to remove err in response</h3>
    <p>Response Data: <strong>{{ dataReceived }}</strong></p>
  `,
  styles: []
})
export class ErrorHandlingComponent implements OnInit {

  public apiData = ajax('/api/data').pipe(
    map(res => {
      if(!res.response) {
        throw new Error('Value expected!');
      }
      return res.response
    }),
    catchError(err => of([]))
  )

  public dataReceived = "";
  public error: any;

  constructor() { }

  ngOnInit() {
    // this.apiData.subscribe({
    //   next(x) { 
    //     this.dataReceived = 'data';
    //     console.log('data replaced by maping: ', x); 
    //     console.log(this.dataReceived)
    //   },
    //   error(err) {
    //     this.error = err;
    //     console.log('Error') 
    //   }
    // })

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
