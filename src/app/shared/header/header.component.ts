import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;
  configData;
  counter = 0;
  userStatusColor= "warn";

  constructor(private backendservice: BackendService) { }

  ngOnInit() {
    this.configData = this.backendservice.getConfig();
    this.backendservice.getcartTotal().subscribe(
      res =>{
        this.counter = res;
      }
    );

    this.backendservice.getUserStatus().subscribe(
      res =>{
        this.userStatusColor = res ? "primary" : "warn";
      }
    );
  }

}
