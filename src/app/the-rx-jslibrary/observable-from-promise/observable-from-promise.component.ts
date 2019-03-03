import { Component, OnInit } from '@angular/core';
import { ObsFromPromiseService } from './obs-from-promise.service';

@Component({
  selector: 'app-observable-from-promise',
  template: `
    <h3>Observables from promise</h3>
    <p *ngIf="directData">
      <strong>directData:</strong> {{ directData }}
    </p>
    <p *ngIf="observerNextData">
      <strong>observerNextData:</strong> {{ observerNextData }}
    </p>
  `,
  styles: []
})
export class ObservableFromPromiseComponent implements OnInit {

  directData: any;
  observerNextData: any;
  constructor(private service: ObsFromPromiseService) { }

  ngOnInit() {

    //this is getting the data only from the observable
    //a subscriber which is not passed an obserber containing definit next, error, and complete areas
    // it just receives the data returned as "data"
    this.service.data.subscribe(data => {
      // console.log(data);
      this.directData = data.url;
      console.log("directData :"+JSON.stringify(this.directData.url))
     })

     //---subscribing to an observable with an observer
     this.service.data.subscribe(
      //---this is an observer
      x => {
        console.log('Observer got a next value: ' + x.url)
        this.observerNextData = x.url;
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
      //---this is an observer
     );
    
  }

}