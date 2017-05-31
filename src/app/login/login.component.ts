import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../app.component.css']
})
export class LoginComponent implements OnInit {
  public loginError = false;
  constructor(public authService: AF, private router: Router) {

  }

  login(email: HTMLInputElement, password: HTMLInputElement) {
      console.log("logging in with email");
      this.authService.login(email.value, password.value).then((data) => {
        this.router.navigate(['user']);
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
          this.loginError = true;
          setTimeout(function() {
            this.loginError = false;
            console.log(this.loginError);
          }.bind(this), 3000);
      });
    }

  newUser(){
    console.log('create new user');
    this.router.navigate(['new-user']);
  }

  ngOnInit() {
  }

}
