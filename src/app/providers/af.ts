// src/app/providers/af.ts
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AF {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  public status;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.user.subscribe(user => {
      if(user){
        this.status = true;
      }
      else {
        this.status = false;
      }
    });
    this.items = db.list('items');
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
