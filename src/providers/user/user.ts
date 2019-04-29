import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  users: any = {};
  userId : string;
  constructor(private _afDB: AngularFireDatabase,
    private afAuth : AngularFireAuth) {
      this.afAuth.authState.subscribe(user =>{
        if (user) this.userId = user.uid
      })
  }

  addUser(user: any): void {
    if(!this.userId) return;
    this.users = this._afDB.object(`/users/${this.userId}`)
    this.users.set({ user });
  }


  getUser(){
    return this._afDB.object(`/users`)
  }

}
