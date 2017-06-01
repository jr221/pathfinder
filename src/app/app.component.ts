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
  constructor(public fireService: AF, private router: Router) {
    fireService.user.subscribe(auth => {
      if(!auth){
        console.log('IS LOGGED OUT!');
        this.status = false;
        this.router.navigate(['login']);
        return;
      }

        this.status=true;
        this.fireService.db.list('user').subscribe(val =>{
          console.log('the uid value is : ', val);
          this.display = val.find(i => i.$key == auth.uid);
        }

      );

      this.router.navigate(['user']);
      console.log('IS LOGGED IN!', this.status);

    });
  }

  signOut(){
    this.fireService.logout().then((data) => {
      this.router.navigate(['login']);
      console.log('Nice, it worked!');
    })
  }

}
