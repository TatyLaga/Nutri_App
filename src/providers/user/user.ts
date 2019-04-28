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
    console.log('Hello UserProvider Provider');
  }

  addUser(user: any): void {
    this.users = this._afDB.object(`/users/`)
    this.users.set({ user });
    return(user);
  }

  getUser(){
    return this.users
  }
}
