import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Observable } from 'rxjs';

@Component({
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
  profileUrl: Observable<String | null>;
  members: Observable<any>;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
  }

  getFilterData(filters){
    this.dataLoading = true;
    this.querySubscription = this.backendService.getFiltersProducts('product', filters)
    .subscribe( members => {
      this.members = members;
      this.dataLoading = false;
    },
    (error) => {
      this.error = true;
      this.errorMessage = error.errorMessage;
      this.dataLoading = false;
    },
    () => {this.error = false; this.dataLoading= false;}
    );
  }

}
