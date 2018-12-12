import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoggedin = true;
  socialAuth: boolean = false; // show Google and FB Sign in only when social auth is enabled
  error: any;
  dataLoading: boolean = false;
  brokenNetwork = false;
  constructor(public afAuth: AngularFireAuth, private _router: Router, private backendService: FirebaseService) { }

  ngOnInit() {
    this.userLoggedin = true;
  }

  ngAfterViewInit(){
    if(this.afAuth.authState) {
      this.getAuthStatus();
    }
}

  getAuthStatus(){
    this.backendService.redirectLogin().then(function(result) {
      if (result.credential) {
        window.localStorage.setItem("displayName",result.user.displayName);
        window.localStorage.setItem("email",result.user.email);
        window.localStorage.setItem("picture",result.user.photoURL);
        this.isLoggedIn = true;
      }
    }).catch(
      (err) => {
        this.error = err;
      })
  }

  login(loginType, formData?) {
      this.backendService.login(loginType, formData);
      /**
      .then(
        (success) => {
          if(formData) {
            window.localStorage.setItem("email",formData.email);
          }
          //console.log(success);
          this._router.navigate(['/settings']);
        }).catch(
        (err) => {
          this.error = err;
        })
      ;
       */
    }

}
