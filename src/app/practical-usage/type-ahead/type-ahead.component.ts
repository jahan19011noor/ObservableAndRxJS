import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-type-ahead',
  template: `
    <h3>Typeahead in input field example</h3>
    <input type="text" id="search-box"/>
    <p *ngIf="successData">Api successful request has returned: {{ successData }}</p>
    <p *ngIf="errorData">Api unsuccessful request has returned: {{ errorData }}</p>
  `,
  styles: []
})
export class TypeAheadComponent implements OnInit {

  public searchBox;
  public typeahead$: Observable<any>
  public successData;
  public errorData;

  constructor() {
  }

  ngOnInit() {

    /**
     * Element will always have to be grabed in side ngOnInit
     * To ensure the element has loaded properly
     * **/
    this.searchBox = document.getElementById('search-box')
    // let mouseMoves = fromEvent(this.searchBox, 'mousemove');
    // mouseMoves.subscribe((evt: MouseEvent) => {
    //   let xCoord = evt.clientX
    //   let yCoord = evt.clientY
    //   console.log("x: "+xCoord+", y: "+yCoord)
    // })
    this.typeahead$ = fromEvent(this.searchBox, 'input').pipe(
      /**
       * we need to explicitely tell typescript
       *    the type of the html element
       * that is why only e.target.value does not work
       * instead I have used
       *    (<HTMLInputElement>e.target).value
       * **/
      
      map((e: KeyboardEvent) => (<HTMLInputElement>e.target).value),
      filter(text => text.length > 2),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap(() => ajax('/api/endpoint'))
    )
    this.typeahead$.subscribe(
      n => {
        this.successData = n;
      },
      err => {
        this.errorData = err
      }
    )
  }

}
