import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ListaProvider {

  colecao='pais';
   
  items: FirebaseListObservable<any>;

  constructor(protected db: AngularFireDatabase) {
    this.items = db.list('/' + this.colecao);
  }

  errorHandler = error => console.error(' service error', error);

  add(objeto) {
    delete objeto.novo;
    this.items.push(objeto);
  }

  getAll() {
    return this.items;
  }

  getOne(id) {
    if (id === 'new') {
      return this.newObject();
    }
    let url = this.colecao + '/' + id;
    return this.db.object(url).first().toPromise();
  }
  newObject() {
    return new Promise(resolve=>{resolve({novo:true})});
  }

  update(objeto) {
    delete objeto.novo;
    this.items.update(objeto.$key, objeto);
  }

  delete(id) {
    this.items.remove(id);
  }

}
