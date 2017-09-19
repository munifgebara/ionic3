import {Component} from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-detalhe',
    templateUrl: 'detalhe.html'
    
})
export class DetalhePage{
    titulo:string='sem titulo';
    parametros:any;

    constructor(public navCtrl: NavController, public navParams: NavParams){
        this.titulo=navParams.get('info'); 
        this.parametros=navParams.data;
    }

    volta(){
        this.navCtrl.pop();
    }

    voltaTudo(){
        this.navCtrl.popToRoot();
    }

}