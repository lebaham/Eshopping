import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getConfig() {
    return environment.social;
  }

  getcartTotal(){
    let fakeresponse = "10";
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        },2000)
      }
    )
  }

  getUserStatus(){
    let fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        },2000)
      }
    )
  }
}
