import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AF } from './providers/af';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  constructor(public authService: AF, private router: Router) {
    //authService.user.subscribe(
     //newAuthState =>           this.loggedIn = (newAuthState === AuthState.LoggedIn));
  }

}
