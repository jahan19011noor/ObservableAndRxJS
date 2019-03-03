import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {
  myObservable = of(1,2,3);
}
