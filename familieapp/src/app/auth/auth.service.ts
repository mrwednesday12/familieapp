import { Injectable } from "@angular/core";
import { Router} from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";
import { auth } from 'firebase/app';
import {Observable} from 'rxjs';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$: Observable<firebase.User>; 
  calendarItems: any[];
  user: User;
  constructor(public afAuth: AngularFireAuth, public router:Router) {

    this.initClient();
    this.user$ = afAuth.authState;

  this.afAuth.authState.subscribe(user => {
  if (user) {
  this.user = user;
  localStorage.setItem("user", JSON.stringify(this.user));
  } else {  
  localStorage.setItem("user", null);
  }
  });
  }

  initClient() {
    gapi.load('client', () => {
      console.log('loaded client')

      // It's OK to expose these credentials, they are client safe.
      gapi.client.init({
        apiKey: 'AIzaSyDolNGHUyxkacs2H7nmdrGHGT63WQErBdQ',
        clientId: '463925134473-dcor5dnrno7hgig2enq7c8ti7ktf73eu.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar'
      })

      gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));

    });
  }

  //Login method
  async login(email: string, password: string) {
  try {
  await this.afAuth.auth.signInWithEmailAndPassword(email, password)
  } 
  catch (e) { alert(e);}
  window.history.back();
  }


  //Logout method
  async logout(){
  await this.afAuth.auth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['/login']);
  }
  
  //Check Log state
  get isLoggedIn(): boolean {
  const user = JSON.parse(localStorage.getItem('user'));
  return user !== null;
  
 }
}
 
