import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';
import { ListaProvider } from '../providers/lista/lista';

export const firebaseConfig = {
  apiKey: "AIzaSyCcW0QPIGEAR-_u17rYPIErtLHZwXCn_mo",
  authDomain: "projeto-bc697.firebaseapp.com",
  databaseURL: "https://projeto-bc697.firebaseio.com",
  projectId: "projeto-bc697",
  storageBucket: "projeto-bc697.appspot.com",
  messagingSenderId: "581807926291"

  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    ResetPasswordPage,
    PrincipalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    ResetPasswordPage,
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ListaProvider
  ]
})
export class AppModule {}
