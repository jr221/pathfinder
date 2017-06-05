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
  public status:boolean = false;
  public display;
  public users;
  public uid;

  constructor(public fireService: AF, private router: Router) {
    this.checkStatus();
  }

  checkStatus(){
    return this.fireService.user.subscribe(auth => {
      if(!auth){
        console.log('IS LOGGED OUT!');
        this.status = false;
        this.router.navigate(['login']);
        return;
      }
        this.status = true;
        this.uid = auth.uid;
      if(this.status){
          this.getDisplay();
        }
      this.router.navigate(['user']);
      console.log('IS LOGGED IN!', this.status);

    });
  }
  getDisplay(){
    return this.fireService.getFromDatabase('user', this.uid, 'uid').subscribe(val =>{
      this.display = val[0].username;
      }
    );
  }

  signOut(){
    this.fireService.logout().then((data) => {
      this.router.navigate(['login']);
      console.log('Nice, it worked!');
    })
  }

}
