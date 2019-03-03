import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationEnd, ActivationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

/** Some Important points to note
 *      
 * 1.   The "NavigationStart" event does not get fired
 *           if the component is a child component
 *      Becasue that event fires only once at bootstrap
 *      Use this pice of code in the constructore to see
 *           List of events which fire during a child component load
 * 
 * 2.   The subscription does not work inside the ngOnInit
 *          in a child component or module
 *      It works inside the constructor
 *          in all child component and modules
 *      But,
 *          In the AppComponent it works in side the ngOnInit()
 *  **/

@Component({
  selector: 'app-router-events',
  template: `
    <h3>Router Events as observables</h3>
    <p>{{ record }}</p>
  `,
  styles: []
})
export class RouterEventsComponent implements OnInit {

  navStart$: Observable<NavigationEnd>;
  record: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.navStart$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>

    this.navStart$.subscribe((event) => {
      // console.log("event")
      // console.log(event)
      this.record = "'NavigationEnd' event captured"
    })
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      // console.log(event)
      // console.log(this.activatedRoute.root)
    });
  }

  ngOnInit() {
    this.navStart$.subscribe((event) => {
      console.log("try: event")
      console.log(event)
    })
    // this.navStart$.subscribe((event) => {
    //   console.log("event")
    //   console.log(event)
    // })
  }

}
