import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zippy',
  template: `
    <div class="zippy">
      <div (click)="toggle()">Toggle</div>
      <div [hidden]="!visible">
        <p>Zippy Content</p>
      </div>
    </div>
  `,
  styles: []
})
export class ZippyComponent {
  visible = true;
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  toggle() {
    this.visible = !this.visible;
    if(this.visible) {
      this.open.emit(null);
    }
    else {
      this.close.emit(null);
    }
  }
}
