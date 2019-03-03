import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() {}

  // a fuction of type observable
  // returns an observable
  // the returned is an observer
  // which compulsorily has the value next
  // next is received at the subscription point

  /**
  Use the Observable constructor to create an observable stream of any type. 
  The constructor takes as its argument the subscriber function
    to run when the observable’s subscribe() method executes.
  A subscriber function receives an Observer object, 
    and can publish values to the observer's next() method.
  **/
  getLocation(): Observable<any> {
    return Observable.create(observer => {
        if(window.navigator && window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    observer.next(position);
                    observer.complete();
                },
                (error) => observer.error(error)
            );
        } else {
            observer.error('Unsupported Browser');
        }
    });
  }
}
