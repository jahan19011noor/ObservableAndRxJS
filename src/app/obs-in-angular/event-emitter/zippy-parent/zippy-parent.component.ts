import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy-parent',
  template: `
    <h3>Zippy's Parent</h3>
    <p *ngIf="zippyShown">Showing child component: "Zippy"</p>
    <p *ngIf="!zippyShown">Child component: "Zippy" is not shown</p>

    <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
  `,
  styles: []
})
export class ZippyParentComponent implements OnInit {

  zippyShown = true;
  constructor() { }

  ngOnInit() {
  }
  
  onOpen(e) {
    this.zippyShown = true;
  }
  onClose(e) {
    this.zippyShown = false;
  }

}
