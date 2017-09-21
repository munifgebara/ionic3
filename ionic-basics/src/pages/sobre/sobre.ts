import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePage } from './detalhes/detalhe';

/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  vaiDetalhe(s: string) {
    this.navCtrl.push(DetalhePage, { info: s }); //Qualquer coisa,objeto, apenas a string...
  }


  /*
  
    ionViewCanEnter(): boolean | Promise<void> {
      console.log('ionViewCanEnter');
      const rnd = Math.random();
      return rnd > 0.1;
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad');
    }
  
    ionViewWillEnter() {
      console.log('ionViewWillEnter');
    }
  
    ionViewDidEnter() {
      console.log('ionViewDidEnter');
    }
  
    ionViewCanLeave(): boolean | Promise<void> {
      console.log('ionViewCanLeave');
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      return promise;
    }
  
    ionViewWillLeave() {
      console.log('ionViewWillLeave');
    }
  
    ionViewDidLeave() {
      console.log('ionViewDidLeave');
    }
  
    ionViewWillUnload() {
      console.log('ionViewWillUnload');
    }
  
  
  */




}
