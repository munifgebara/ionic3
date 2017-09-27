import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'; //added AuthProvider
//import { HomePage } from '../home/home';
 
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signupForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  error: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private auth: AuthProvider)
  {
    this.signupForm = this.fb.group({  
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  
    this.email = this.signupForm.controls['email'];     
    this.password = this.signupForm.controls['password'];    
  }
 
  submit(): void { 
    var credentials = ({email: this.email.value, password: this.password.value});
    this.auth.registerUser(credentials).then(c=>console.log(c)).catch(erro=>console.log(erro));
  } 
}