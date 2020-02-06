import { Injectable } from "@angular/core";
import { Router} from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User;
  constructor(public afAuth: AngularFireAuth, public router:Router) {


  this.afAuth.authState.subscribe(user => {
  if (user) {
  this.user = user;
  localStorage.setItem("user", JSON.stringify(this.user));
  } else {  
  localStorage.setItem("user", null);
  }
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
 
