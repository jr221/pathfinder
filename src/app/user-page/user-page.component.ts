import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  public loginError = false;

  constructor(public authService: AF, private router: Router) {
    if(!authService.status){
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

  signOut(){
    this.authService.logout().then((data) => {
      this.router.navigate(['login']);
      console.log('Nice, it worked!');
    })
  }
  joinAdventure(){
    this.router.navigate(['joinAdventure']);
  }
  createAdventure(){

  }

}
