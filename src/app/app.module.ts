import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AF } from "./providers/af";
import { UserPageComponent } from './user-page/user-page.component';
import { JoinAdventureComponent } from './join-adventure/join-adventure.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { OptionsPageComponent } from './options-page/options-page.component';

const routes: Routes = [
  { path: 'new-user', component: NewUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'joinAdventure', component: JoinAdventureComponent },
  { path: 'adventureOptions', component: OptionsPageComponent },
  { path: 'newCharacter', component: CreateCharacterComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
]

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCb3G_I0MbAjQkJDjcgKER6RHGjOGZ0UeQ',
  authDomain: 'pathfinder-9db2c.firebaseapp.com',
  databaseURL: 'https://pathfinder-9db2c.firebaseio.com',
  storageBucket: 'pathfinder-9db2c.appspot.com',
  messagingSenderId: '405592642384'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    UserPageComponent,
    JoinAdventureComponent,
    CreateCharacterComponent,
    OptionsPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
