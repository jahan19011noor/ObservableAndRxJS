import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsFromPromiseService {

  data = from(fetch('/api/endpoint'));
}
