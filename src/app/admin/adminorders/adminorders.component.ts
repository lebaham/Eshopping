import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent implements OnInit {
  displayedColumns: string[] = ['category', 'scategory', 'name', 'price', 'id'];
  toggleField: string;
  savedChanges = false;
  myDocData: any;
  error = false;
  counter = 0;
  errorMessage = '';
  dataLoading = false;
  private querySubscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  members: any[];

  constructor(private backendService: BackendService) {
  }

  ngOnInit() {
    this.toggleField = 'searchMode';
    this.dataSource = new MatTableDataSource(this.members);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getProducts('orders').subscribe(
      members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.dataSource.sort;
      },
      error => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; }
    );
  }

  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getFiltersProducts('orders', filters).subscribe(
      members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.dataSource.sort;
      },
      error => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; }
    );
  }

  setData(formData) {
    this.dataLoading = true;
    this.querySubscription = this.backendService.setProducts('orders', formData).subscribe(
      members => {
         if (members) {
          this.savedChanges = true;
         }
      },
      error => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; }
    );
  }

  updateData(formData) {
    this.dataLoading = true;
    this.querySubscription = this.backendService.updateProducts('orders', formData).subscribe(
      members => {
         if (members) {
          this.savedChanges = true;
         }
      },
      error => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; }
    );
  }

  getDoc(docId) {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getOneProductDoc('orders', docId).subscribe(
      res => {
         if (res) {
          this.myDocData = res;
          this.toogle('editMode');
          this.dataLoading = false;
         }
      },
      error => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; }
    );
  }

  deleteDoc(docId) {
    if (confirm('Are you sure want to delete this recard?')) {
    this.dataLoading = true;
    this.querySubscription = this.backendService.deleteOneProductDoc('orders', docId).subscribe(
      res => {
         if (res) {
          this.toogle('searchMode');
          this.dataLoading = false;
         }
      },
      error => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; }
    );
    }
  }


  toogle(filter?) {
    if (!filter) { filter = 'searchMode'; } else { filter = filter; }
    this.toggleField = filter;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
