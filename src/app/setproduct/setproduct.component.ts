import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit {
  toggleField: string;

  constructor() { 
    this.toggleField = "searchMode"
  }

  ngOnInit() {
  }

  toogle(filter?){
    if(!filter){filter = "searchMode"}
    else{filter = filter}
    this.toggleField = filter;
  }

}
