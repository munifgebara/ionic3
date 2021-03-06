import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ListaProvider {

  supercolecao='lista_de_compras';
  colecao='default';

  selecionado={quantidade:0,nome:"",comprado:false};
   
  items: FirebaseListObservable<any>;

  alterando=false;

  constructor(protected db: AngularFireDatabase) {
    //firebase.database.enableLogging(a=>console.log(a));
  }

  conecta(){
    console.log('Conectando');
    console.log("items antes de conectar",this.items);
    this.items = this.db.list('/'+this.supercolecao+'/' + this.colecao);
    //console.log("items depois de conectar",this.items);
  }



  errorHandler = error => console.error(' service error', error);

  add(objeto) {
    delete objeto.novo;
    this.items.push(objeto);
  }

  getAll() {
    return this.items;
  }
/*
  getOne(id) {
    if (id === 'new') {
      return this.newObject();
    }
    let url = this.colecao + '/' + id;
    return this.db.object(url).first().toPromise();
  }
  newObject() {
    return new Promise(resolve=>{resolve({})});
  }
*/
  update(objeto) {
    console.log(objeto)
    let o=JSON.parse(JSON.stringify(objeto));
    delete o.$key;
    this.items.update(objeto.$key,o);
  }

  delete(id) {
    this.items.remove(id);
  }

  desconecta(){
    this.items.$ref.off();
  }

}
