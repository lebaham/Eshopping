import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { ObserversModule } from '@angular/cdk/observers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  toggle = true;
  savedChanges = false;
  error = false;
  errorMessage = '';
  dataLoading = false;
  private querySubscription;
  profileUrl: String;
  members: Observable<any>;
  data: any;
  myDocData;
  counter = 0;
  profilUrl: string;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.getData();
  }

  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getFiltersProducts('product', filters).subscribe(
      members => {
        this.members = members;
        this.dataLoading = false;
      },
      error => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; }
    );
  }
  addToCart(item, counter) {
    this.dataLoading = true;
    this.data = item;
    this.data.qty = counter;
    return this.backendService.updateShoppingCart('cart', this.data).subscribe((members) => {
      this.dataLoading = false;
      this.counter = 0;
      this.savedChanges = true;
    },
    (error) => {
      this.error = true;
      this.errorMessage = error.errorMessage;
      this.dataLoading = false;
    },
    () => {
      this.error = false; this.dataLoading = false;
    });
  }

  getPic(picId) {
    this.profilUrl = '';
  }

  showDetails(item) {
    this.counter = 0;
    this.myDocData = item;
    this.getPic(item.path);
    this.dataLoading = true;
    this.data = item;
    this.querySubscription = this.backendService.updateShoppingInterest('interests', this.data).subscribe(
      members => {
        this.dataLoading = false;
        this.counter = 0;
        this.savedChanges = true;
      },
      (error) => {
        this.error = true;
        this.errorMessage = error.errorMessage;
        this.dataLoading = false;
      },
      () => {
        this.error = false; this.dataLoading = false;
      }
    );
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getProducts('product').subscribe(
      members => {
        this.members = members;
        this.dataLoading = false;
      },
      error => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; }
    );
  }


  countProd(filter) {
    if (filter = 'add') {
      this.counter = this.counter + 1;
    } else {
        if (this.counter > 0) {
          this.counter = this.counter - 1;
        }
        }
    }

}
