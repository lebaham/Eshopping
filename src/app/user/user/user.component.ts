import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  toogle = true;

  constructor() {
    this.getUser();
  }

  ngOnInit() {
  }

  onSubmit() {}

  logout() {}

  getUser() {}

}
