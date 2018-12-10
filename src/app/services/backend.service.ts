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

  getcartTotal() {
    const fakeresponse = '10';
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }

  getUserStatus() {
    const fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }

  getProducts(collType) {
    const fakeresponse = [{
      'category': 'test', 'scategory': 'test', 'name': 'Product Name', 'price': '300', 'id': '1'
    }];
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }

  getFiltersProducts(collType, filters) {
    const fakeresponse = [{
      'category': 'test', 'scategory': 'test', 'name': 'Product Name', 'price': '300', 'id': '1'
    }];
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }

  setProducts(collType, formData) {
    const fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }

  updateProducts(collType, formData) {
    const fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }

  getOneProductDoc(collType, docId) {
    const fakeresponse = {
      'category': 'test', 'scategory': 'test', 'name': 'Product Name', 'price': '300', 'id': '1'
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }

  deleteOneProductDoc(collType, docId) {
    const fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }

}
