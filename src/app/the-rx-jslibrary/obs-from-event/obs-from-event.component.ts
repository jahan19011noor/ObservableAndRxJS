import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-obs-from-event',
  template: `
    <h3>Observables from event</h3>
    <div class="div-for-event" id="my-element">
        Move movement inside div is observed
    </div>
    <p><strong>Mouse Coordinates</strong></p>
    <p>X Coordinate: {{xCoord}}</p>
    <p>Y Coordinate: {{yCoord}}</p>
  `,
  styles: [`
    .div-for-event
    {
      width: 200px;
      height: 200px;
      text-align: center;
      vertical-align: middle;
      display: block;
      border: 1px solid black;
      background: bisque;
      color: black;
      font-weight: bold;
      padding: 20px;
      margin-top: 40px;
    }
  `]
})
export class ObsFromEventComponent implements OnInit {

  public el: any;
  public mouseMoves: any;
  public xCoord: any;
  public yCoord: any;
  public subscription: any;

  constructor() { }

  ngOnInit() {
    this.el = document.getElementById('my-element')
    this.mouseMoves = fromEvent(this.el, 'mousemove');
    this.subscription = this.mouseMoves.subscribe((evt: MouseEvent) => {
      this.xCoord = evt.clientX
      this.yCoord = evt.clientY

      if(evt.clientX < 40 && evt.clientY < 265) {
        this.subscription.unsubscribe();
      }
    })
  }

}
