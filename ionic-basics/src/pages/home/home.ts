import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';
import { DetalhePage} from '../sobre/detalhes/detalhe';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dtl=DetalhePage;

  constructor(public navCtrl: NavController) {

  }


  vaiSobre(){
    this.navCtrl.push(SobrePage);
  }

}
