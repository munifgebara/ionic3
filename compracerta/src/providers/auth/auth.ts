import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import {ListaProvider} from "../../providers/lista/lista";
import * as firebase from 'firebase/app';
 
@Injectable()
export class AuthProvider {

   user: Observable<firebase.User>;

  
  constructor(private af: AngularFireAuth,public lp:ListaProvider) {
    this.user = af.authState;
  }

   
  loginWithEmail(credentials) {
    return this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
     
  }

  registerUser(credentials: any) {
    return this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  resetPassword(emailAddress:string){
    return this.af.auth.sendPasswordResetEmail(emailAddress);
  }
 
  logout() {
    this.lp.desconecta();
    this.af.auth.signOut();
  }
 
  get currentUser():string{
    return this.af.auth.currentUser?this.af.auth.currentUser.email:null;
  } 

}