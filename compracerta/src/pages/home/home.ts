import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'; //added AuthProvider
import { SignupPage } from '../signup/signup' //Added sign up page
import { ResetPasswordPage } from '../reset-password/reset-password'
import { PrincipalPage  } from '../principal/principal'
import { ListaProvider } from "../../providers/lista/lista";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  error: any;
  signupPage = SignupPage;
  resetPasswordPage=ResetPasswordPage;
  principalPage=PrincipalPage;
  logado;

  constructor(public navCtrl: NavController, private fb: FormBuilder, public auth: AuthProvider,public lp:ListaProvider) { //Added AuthProvider
    this.loginForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
    this.auth.user.subscribe(u=>this.onLoginStateChange(u));
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }
  onLoginStateChange(u) {
    let last=this.navCtrl.last();
    let active =(last===undefined)?true:this.navCtrl.last().instance instanceof HomePage;
    console.log('onLoginStateChange',active);
    if (u){
       this.lp.colecao=u.uid;
       this.navCtrl.push(PrincipalPage);    
    }
    else if(!active&&!u) {
      console.log("Voltando para a Principal");
       this.navCtrl.popToRoot().catch(reason=>console.log("Pop to Root"+reason));;
       
    }
  }



  login(): void {
    if (this.loginForm.valid) {
      var credentials = ({ email: this.email.value, password: this.password.value });
      this.auth.loginWithEmail(credentials).then(r=>console.log(r)).catch(erro=>console.log(erro));
    }
  }
  
  logout(): void {
    this.auth.logout();
  }
}