import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  template: `
    <h3>The Async Pipe in Use</h3>
    <div><code>observable|async</code>
      Time: {{ time | async }}
    </div>
  `,
  styles: []
})
export class AsyncPipeComponent {
  time = new Observable(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000)  
  })
}
