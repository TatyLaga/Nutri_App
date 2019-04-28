import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

/*
  Generated class for the ProvregisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvregisterProvider {
  private user: firebase.User;

  constructor(public afRegister: AngularFireAuth) {
    console.log('Hello ProvregisterProvider Provider');
  }

  registerEmailAndPassword(email, password) {

    this.afRegister.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage); // log error, this must be changed to be shown on page

      // ...
    });
  }
}
