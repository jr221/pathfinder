// src/app/providers/af.ts
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Character } from '../create-character/character.model';
import * as firebase from 'firebase/app';

@Injectable()
export class AF {
  user: Observable<firebase.User>;
  users: FirebaseListObservable<any[]>;
  public uid;
  public currentChar;
  // fix the logon for each page public loginStatus;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, private router: Router) {
    this.user = afAuth.authState;
    this.users = db.list('user');
    this.user.subscribe((data) => {
      console.log('resolved this.uid ', data.uid);
      this.uid = data.uid
    });
  }

    signup(email: string, password: string) {
      return this.afAuth
        .auth
        .createUserWithEmailAndPassword(email, password);
    }


    getFromDatabase(path: string, q: string, orderBy: string){
      return this.db.list(path, {
        query: {
          orderByChild: orderBy,
          equalTo: q
        }
      });
    }

    pushToDatabase(path: string, info){
      this.db.list(path).push(info);
    }

    setCurChar(curChar: Character){
      this.currentChar = curChar;
    }

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
