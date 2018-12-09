import { animate, transition, state, style, trigger } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-open-close',
    animations: [
    ],
    templateUrl: 'open-close.component.html',
    styleUrls: ['open-close.component.css']
  })
  export class OpenCloseComponent {
    isOpen = true;
  
    toggle() {
      this.isOpen = !this.isOpen;
    }
  
  }