import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaProvider } from '../../providers/lista/lista';


/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  lista;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lp: ListaProvider) {
  }

  ngOnInit() {
    this.atualiza();
    console.log(this.lista);
  }

  atualiza() {
    this.lista = this.lp.getAll();
  }

  itemSelected(item){
    console.log(item);
    //this.navCtrl
  }
  itemUpdated(item){
    console.log(item);
    this.lp.update(item);
    //this.navCtrl
  }

  novo() {
    //
  }

  excluir(obj) {
    this.lp.delete(obj.$key);
    this.atualiza();
  }

  editar(obj) {

  }
}
