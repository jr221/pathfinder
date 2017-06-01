// src/app/providers/af.ts
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AF {
  user: Observable<firebase.User>;
  users: FirebaseListObservable<any[]>;
  //public status = false;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, private router: Router) {
    this.user = afAuth.authState;
    this.users = db.list('user');
  }

  signup(email: string, password: string) {
      return this.afAuth
        .auth
        .createUserWithEmailAndPassword(email, password);
    }
    //.then(value => {
    //  console.log('Success!', value);
    //})
    //.catch(err => {
    //  console.log('Something went wrong:',err.message);
    //})
    login(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    loginWithGoogle() {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
      return this.afAuth.auth.signOut();
    }
}
