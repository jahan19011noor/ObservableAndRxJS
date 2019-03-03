import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-obs-to-create-ajax-req',
  template: `
    <h3>Observables to create ajax request</h3>
    <p>
      Api Response Status: {{ response_status }}
    </p>
    <p>
      Api Response: {{ response }}
    </p>
  `,
  styles: []
})
export class ObsToCreateAjaxReqComponent implements OnInit {

  apiData: any;
  response_status: any;
  response: any
  constructor() { }

  ngOnInit() {
    this.apiData = ajax('/api/data');
    // this.apiData.subscribe(res => {
    //   console.log("try")
    //   console.log(res.status, res.response)
    //   this.response = res.response
    //   this.response_status = res.status
    // })

    this.apiData.subscribe(
      n => {
        console.log("success")
      },
      err => {
        this.response_status = err.status
        this.response = err.message
        console.log("Error: ")
        console.log(err)
      },
      () => {console.log("completed")}
    );
  }

}
