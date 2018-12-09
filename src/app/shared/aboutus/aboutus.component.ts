import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn} from 'src/app/router.animation';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn': ''}

})
export class AboutusComponent implements OnInit {
  state: string = '';
  
  isOpen = false;
  in = true;
  isShown = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.in = this.in;
    this.isShown = this.isShown;
  }

}
