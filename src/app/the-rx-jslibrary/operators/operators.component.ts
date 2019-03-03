import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-operators',
  template: `
    <h3>Rxjs Operator in action</h3>
    <p>Squares of numbers: 1, 2, 3 are: {{ sqnums }}<p>
  `,
  styles: []
})
export class OperatorsComponent implements OnInit {

  public nums = of(1,2,3);
  public squareValues = map((val:number) => val*val)
  public squaredNums = this.squareValues(this.nums)
  public sqnums: string = "";

  constructor() { }

  ngOnInit() {

    this.squaredNums.subscribe(x => {
      if(!this.sqnums)
      {
        this.sqnums += String(x)
      }
      else {
        this.sqnums += ", "+String(x)
      }
    })
  }

}
