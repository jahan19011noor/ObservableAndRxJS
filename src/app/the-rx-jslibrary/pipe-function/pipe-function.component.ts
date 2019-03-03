import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

@Component({
  selector: 'app-pipe-function',
  template: `
  <h3>Rxjs Pipe in action</h3>
  <p>Squares of odd numbers in the list: [1, 2, 3, 4, 5] are: {{ sqOddNums }}<p>
  `,
  styles: []
})
export class PipeFunctionComponent implements OnInit {

  public nums = of(1, 2, 3, 4, 5);
  public squareOddValues = pipe(
    filter((n: number) => n % 2 !== 0),
    map(n => n*n)
  )
  public squareOdd = this.squareOddValues(this.nums)
  public sqOddNums: string = "";

  constructor() { }

  ngOnInit() {
    this.squareOdd.subscribe(x => {
      if(!this.sqOddNums) {
        this.sqOddNums += String(x)
      }
      else {
        this.sqOddNums += ", "+String(x)
      }
    })
  }

}
