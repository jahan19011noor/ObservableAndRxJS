import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ObservableAndRxJS';

  navStart$: Observable<NavigationEnd>
  
  constructor(private router: Router) {
    this.navStart$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>
  }
  

  ngOnInit() {
    this.navStart$.subscribe((event) => {
      console.log("router event captured inside ngOnInit in AppComponent")
      console.log(event)
    })
  }
}
