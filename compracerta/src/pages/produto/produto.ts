import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaProvider } from '../../providers/lista/lista';
/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public lp:ListaProvider) {
  }

  salvar(r){
    console.log(r);
    let novoItem={comprado:this.lp.selecionado.comprado,nome:r.value.nome,quantidade:r.value.quantidade};
    if (this.lp.alterando){
       novoItem['$key']=this.lp.selecionado['$key'];
       this.lp.alterando=false;
       this.lp.update(novoItem);
    }
    else{
      this.lp.add(novoItem);
    }
    this.navCtrl.parent.select(0); 
  }

  delete(r){
    this.lp.delete(this.lp.selecionado['$key']);
    this.navCtrl.parent.select(0);
  }
  ionViewWillLeave(){
    this.lp.alterando=false;
    this.lp.selecionado={quantidade:0,nome:"",comprado:false};
  }

}
